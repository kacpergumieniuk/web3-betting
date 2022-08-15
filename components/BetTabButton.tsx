import React from 'react'

interface BetTabButtonInterface {
    setChosenBets: (value: any) => void
    type?: string
    team1: string
    team2: string
    winner?: string
    id: number
    odds: number
}

const BetTabButton = ({
    setChosenBets,
    type,
    team1,
    team2,
    winner,
    id,
    odds,
}: BetTabButtonInterface) => {
    return (
        <>
            {type != 'draw' && (
                <div
                    className="bg-secondary mx-2 text-center w-20 py-1 rounded-lg cursor-pointer hover:bg-secondary-hover transition flex flex-col justify-between"
                    onClick={() =>
                        setChosenBets((prev: any) => [
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
