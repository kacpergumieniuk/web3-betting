import React from 'react'
import { Bet } from '@prisma/client'
interface BetTabButtonInterface {
    setChosenBets: (value: any) => void
    type?: string
    team1: string
    team2: string
    winner?: string
    id: string
    odds: number
    disabled?: boolean
}

const BetTabButton = ({
    setChosenBets,
    type,
    team1,
    team2,
    winner,
    id,
    odds,
    disabled,
}: BetTabButtonInterface) => {
    return (
        <>
            {type != 'draw' && (
                <div
                    className={` mx-2 text-center w-1/3 p-4 transition flex justify-between text-standard ${
                        disabled
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-primary text-white cursor-pointer'
                    }`}
                    onClick={() =>
                        !disabled &&
                        setChosenBets((prev: Bet[]) => [
                            ...prev,
                            {
                                team1: team1,
                                team2: team2,
                                odds: odds,
                                id: id,
                                winner: winner,
                            },
                        ])
                    }
                >
                    <p className="text-sm">{winner}</p>
                    <p className=" font-bold">{odds}</p>
                </div>
            )}
        </>
    )
}

export default BetTabButton
