import { useState, useEffect } from 'react'
import BetTabButton from './BetTabButton'
import { BetTabInterface } from '../../../common/types'
import { Bet } from '@prisma/client'

const BetTab = ({
    team1,
    team2,
    odds1,
    odds2,
    draw,
    id,
    category,
    setChosenBets,
    chosenBets,
}: BetTabInterface) => {
    useEffect(() => {
        chosenBets.filter((bet) => bet.id === id).length > 0
            ? setIsTabChosen(true)
            : setIsTabChosen(false)
    }, [chosenBets])

    const [isTabChosen, setIsTabChosen] = useState<boolean>(false)

    return (
        <div className="flex relative my-3 py-6 rounded-lg justify-between items-center">
            <p className="absolute top-0 left-0 capitalize text-xs text-gray-400 ">
                {category}
            </p>
            <div className="flex items-center gap-2 w-1/6">
                <div className="text-xs text-white text-center bg-primary p-2">
                    <p>18:30</p>
                    <p>Dzisiaj</p>
                </div>
                <div className="text-center text-white text-xs leading-3 w-12">
                    <p className="text-gray-400">{team1}</p>
                    <p>vs</p>
                    <p className="text-gray-400">{team2}</p>
                </div>
            </div>
            <div className="flex w-5/6 gap-3 relative">
                <p className="absolute text-xs text-gray-400 -top-[27px] left-[8px]">
                    Match result
                </p>
                <BetTabButton
                    team1={team1}
                    team2={team2}
                    odds={odds1}
                    id={id}
                    setChosenBets={setChosenBets}
                    winner={team1}
                    disabled={isTabChosen}
                />
                <BetTabButton
                    team1={team1}
                    team2={team2}
                    odds={draw}
                    id={id}
                    setChosenBets={setChosenBets}
                    winner={'Remis'}
                    disabled={isTabChosen}
                />
                <BetTabButton
                    team1={team1}
                    team2={team2}
                    odds={odds2}
                    id={id}
                    setChosenBets={setChosenBets}
                    winner={team2}
                    disabled={isTabChosen}
                />
            </div>
        </div>
    )
}

export default BetTab
