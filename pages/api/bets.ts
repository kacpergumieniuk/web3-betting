import { PrismaClient, Prisma } from '@prisma/client'
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

    await res.status(200).json(savedBet)

  }
  catch (e) {
    console.log('e: ', e);
  }
}
