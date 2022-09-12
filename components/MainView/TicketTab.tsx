import { useEffect, useState, useRef } from 'react'
import {ChosenBetsInterface, TicketTabInterface} from '../../common/types'
import { AiOutlineClose } from 'react-icons/ai'
import autoAnimate from '@formkit/auto-animate'
import { Prisma } from '@prisma/client'

const TicketTab = ({
    userBalance,
    chosenBets,
    setChosenBets,
}: TicketTabInterface) => {
    const [totalCourse, setTotalCourse] = useState<number>(1)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [stakeValue, setStakeValue] = useState<number>(0)
    const [estimatedWin, setEstimatedWin] = useState<number>(0)

    const parent = useRef(null)

    const handleDeleteTab = (id: number) => {
        const newChosenBets = chosenBets?.filter((bet: any) => {
            return bet.id != id
        })
        setChosenBets!(newChosenBets)
        console.log(id)
    }

    const handleInputChange = (e: any) => {
        e.target.value === ''
            ? setStakeValue(0)
            : setStakeValue(parseInt(e.target.value))
    }

    const handleSubmit = () => {
        if (userBalance < stakeValue) {
            setErrorMessage("You don't have enough founds.")
        } else {
            setErrorMessage('')
        }
        createNewCoupon('Test User String', stakeValue, chosenBets)   //TODO: Statyczny User
    }

    function groupChosenBets(chosenBets: ChosenBetsInterface[] | undefined) {
        let matchesOnCoupon: Prisma.MatchOnCouponUncheckedCreateWithoutCouponInput[] = [];
        if (chosenBets) {
            for (const chosenBet of chosenBets) {
                const matchOnCoupon: Prisma.MatchOnCouponUncheckedCreateWithoutCouponInput = {
                    betResult: chosenBet.winner,
                    betId: chosenBet.id
                }
                matchesOnCoupon = [...matchesOnCoupon, matchOnCoupon];
            }
        }
        // const matchesOnCoupon2 = chosenBets?.map((chosenBet) => (({betResult: chosenBet.winner, betId: chosenBet.id}))); //TODO Nie umiem tego zatypować dla TypeScriptu
        return matchesOnCoupon;
    }

    async function createNewCoupon(user: string, amount: number, chosenBets: ChosenBetsInterface[] | undefined) {
        let matchesOnCoupon = groupChosenBets(chosenBets);


        const coupon : Prisma.CouponCreateInput = {
            user: user,
            amount : amount,
            state : 'Obstawiony',
            matchOnCoupon: {
                create: matchesOnCoupon
            }
        };

        console.log('createNewCoupon, coupon: ' , coupon);

        //TODO Zamień z RESTa na tRCP
        const response = await fetch('/api/coupon', {
            method: 'POST',
            body: JSON.stringify(coupon),
        })

        return await response.json()
    }

    useEffect(() => {
        stakeValue > 0 && setEstimatedWin(stakeValue * totalCourse)
        stakeValue === 0 && setEstimatedWin(0)
    }, [stakeValue, chosenBets, totalCourse])

    useEffect(() => {
        setTotalCourse(1)
        chosenBets?.map((bet) => {
            totalCourse === 1
                ? setTotalCourse(bet.odds)
                : setTotalCourse((prev) => prev * bet.odds)
        })
    }, [chosenBets])

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    return (
        <div
            ref={parent}
            className="bg-primary bg-white mr-6 fixed mb-4 mt-8 rounded-lg w-2/12 right-0 h-[calc(100vh-7rem)] overflow-auto"
        >
            {chosenBets?.map((bet: any, key) => (
                <div
                    className=" relative rounded-md p-2 m-2 bg-background-color"
                    key={key}
                >
                    <AiOutlineClose
                        onClick={() => handleDeleteTab(bet.id)}
                        className="text-white absolute right-2 cursor-pointer"
                    />
                    <p className="text-xs font-bold text-gray-500">
                        {bet.team1} - {bet.team2}
                    </p>
                    <p className="text-sm font-bold text-white">
                        Wynik meczu: {bet.winner}
                    </p>
                    <p className="text-white">Kurs: {bet.odds}</p>
                </div>
            ))}
            {totalCourse > 1 && (
                <>
                    <div className="flex justify-between items-center px-3 flex-wrap mt-5 mb-2">
                        <p className="text-gray-500 font-bold text-sm">
                            Kurs{' '}
                            <span className="text-white text-md p-2 bg-background-color font-bold rounded-lg">
                                {totalCourse.toFixed(2)}
                            </span>
                        </p>
                        <input
                            type="text"
                            className="rounded-md py-2 border border-black w-2/5 font-bold px-2"
                            onChange={(e) => handleInputChange(e)}
                            value={stakeValue}
                        />
                    </div>
                    <div className="flex justify-between items-center px-3 mb-3">
                        <p className="text-sm text-white">
                            Ewentualna wygrana:
                        </p>
                        <p className="text-white font-bold">
                            {estimatedWin.toFixed(2)} zł
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="p-2 mx-2 rounded-md font-bold w-full bg-white mb-3"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <p className="text-white text-center">{errorMessage}</p>
                </>
            )}
        </div>
    )
}
export default TicketTab
