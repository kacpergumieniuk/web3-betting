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
        <div className="flex px-4 my-3 py-6 bg-primary rounded-lg justify-between items-center">
            <p className="font-bold text-white">
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
