import React from 'react'

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
                    className={` mx-2 text-center w-20 py-1 rounded-lg  transition flex flex-col justify-between ${
                        disabled
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-secondary cursor-pointer hover:bg-secondary-hover'
                    }`}
                    onClick={() =>
                        !disabled &&
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
