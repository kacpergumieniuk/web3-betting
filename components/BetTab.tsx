import { useState } from 'react'
import BetTabButton from './BetTabButton'

interface BetTabInterface {
    team1: string
    team2: string
    odds1: number
    odds2: number
    draw: number
    id: number
    setChosenBets: (value: any) => void
}
const BetTab = ({
    team1,
    team2,
    odds1,
    odds2,
    draw,
    id,
    setChosenBets,
}: BetTabInterface) => {
    return (
        <div className="flex px-4 my-3 py-6 bg-white rounded-lg justify-between items-center">
            <p className="font-bold">
                {team1} - {team2}
            </p>
            <div className="flex">
                <BetTabButton
                    team1={team1}
                    team2={team2}
                    odds={odds1}
                    id={id}
                    setChosenBets={setChosenBets}
                    winner={team1}
                />
                <div
                    className="bg-secondary mx-2 text-center px-4 py-1 rounded-lg cursor-pointer hover:bg-secondary-hover transition flex flex-col justify-between"
                    onClick={() =>
                        setChosenBets((prev: any) => [
                            ...prev,
                            { team: team1, odds: odds1, id: id },
                        ])
                    }
                >
                    <p className="text-sm">Remis</p>
                    <p className=" font-bold">{draw}</p>
                </div>
                <BetTabButton
                    team1={team1}
                    team2={team2}
                    odds={odds2}
                    id={id}
                    setChosenBets={setChosenBets}
                    winner={team2}
                />
            </div>
        </div>
    )
}

export default BetTab
