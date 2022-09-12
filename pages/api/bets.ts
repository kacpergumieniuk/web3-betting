import { PrismaClient, Prisma, MatchOnCoupon } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'


const prisma = new PrismaClient()


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    try{
      if (req.method === 'POST') {
        saveBet(req, res);
      }
      else if (req.method === 'PATCH') {
        updateBet(req, res);
      }
      else {
        return res.status(405).json({ message: 'Method not allowed' });
      }
  }catch(err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}

async function saveBet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const betData: Prisma.BetCreateInput = JSON.parse(req.body)
    const savedBet = await prisma.bet.create({
      data: betData
    })

    res.status(200).json(savedBet)
  }
  catch (e) {
    console.log('e: ', e);
  }
}

async function updateBet(req: NextApiRequest, res: NextApiResponse) {
  const betData = JSON.parse(req.body)


  try {
    console.log('before updating bets: ', betData);

    const savedBet = await prisma.bet.updateMany({
      where: {  id: {in: betData.betsToUpdate} },
      data:  betData.data,
    })

    console.log('after updating bets: ', betData);

    await res.status(200).json(savedBet);

    resolveCoupons(betData.betsToUpdate, betData.data.result);

  }
  catch (e) {
    console.log('e: ', e);
  }
}

async function resolveCoupons(updatedBetsId: string[], betWinner: string) {
  //1. Get Bet IDs
  //2. Get MatchesOnBet from DB with those Bet Ids
  //3. Determine if MatchesOnBet is lost
  //4. If Lost, change Coupon to Lost
  //5. If Won, determine if whole Coupon is Won -- NOT DONE


  const receivedMatchOnCoupon = await getMatchOnCouponsWithLostBets(updatedBetsId);

  const couponsIdsToDetermineState = determineCouponState(receivedMatchOnCoupon, betWinner);

  await updateCouponsToLost(couponsIdsToDetermineState.lost);

}

async function getMatchOnCouponsWithLostBets(updatedBetsId: string[]) {
  const receivedMatchOnCoupon = await prisma.matchOnCoupon.findMany({
    where: {betId: {in: updatedBetsId}},
    include: {
      bet: {
        select: {
          team1: true,
          team2: true,
        }
      }
    }
  })

  console.log('receivedMatchOnCoupon: ', receivedMatchOnCoupon);
  return receivedMatchOnCoupon;
}

function determineCouponState(receivedMatchOnCoupon: (MatchOnCoupon & {bet: {team1: string, team2: string}})[], betWinner: string) {
  const couponsIdsToDetermineState: {lost:  string[], checkForWin: string[]} = {lost:  [], checkForWin: []}; //TODO: Trzeba zmienic strukture danych albo odwrócić logike -> sprawdzaj kupony w całości, z poziomu dziecka nie możemy stwierdzić kupon jest wygrany bo nie mamy innych dzieci; dodanie wyniku na MatchesOnCoupon może pomóc

  for (const matchOnCoupon of receivedMatchOnCoupon) {
    const winningTeam = matchWinnerWithResult(betWinner, matchOnCoupon.bet);
    console.log('matchOnCoupon: ', matchOnCoupon);
    console.log('winnerResult: ', winningTeam);
    if (winningTeam !== matchOnCoupon.betResult) {
      couponsIdsToDetermineState.lost = [...couponsIdsToDetermineState.lost, matchOnCoupon.couponId];
    } else {
      couponsIdsToDetermineState.checkForWin = [...couponsIdsToDetermineState.checkForWin, matchOnCoupon.couponId];
    }
  }

  return couponsIdsToDetermineState;
}

function matchWinnerWithResult(betWinner: string, bet: { team1: string; team2: string; }) {
  console.log('betWinner: ', betWinner);

  if (betWinner === 'Wygrana 1') {
    return bet.team1;
  }
  if (betWinner === 'Wygrana 2') {
    return bet.team2;
  }
  if (betWinner === 'Remis') {
    return 'Remis';
  }
}


async function updateCouponsToLost(lostCoupons: string[]) {
  const updatedCouponsToLost = await prisma.coupon.updateMany({
    where: {id: {in: lostCoupons}},
    data: {state: "Przegrany"},
  })
  console.log('updatedCouponsToLost: ', updatedCouponsToLost);
}
