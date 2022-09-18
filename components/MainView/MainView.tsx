import { useState } from 'react'
import { Bet, PrismaClient } from '@prisma/client'
import { ChosenBetsInterface } from '../../common/types'
import BetTab from '../../components/MainView/BetTab/BetTab'
import TicketTab from '../../components/MainView/TicketTab'
import { MainView } from '../../common/types'
import FeaturedMatches from './FeaturedMatches'
import { useAllMatches } from '../../hooks/useAllMatches'
import { contract } from '../../utils/constants'
import { useEthers } from '@usedapp/core'

const MainView = ({ filteredBets, bets, currentCategory }: MainView) => {
    const [chosenBets, setChosenBets] = useState<Array<ChosenBetsInterface>>([])
    const [userBalance, setUserBalance] = useState<number>(200)
    const matchesData = useAllMatches(contract)

    return (
        <div className="flex pt-16 min-h-screen justify-center mr-20 ml-16">
            <div
                className="flex-col flex mt-8 w-8/12"
                onClick={() => console.log(matchesData)}
            >
                <FeaturedMatches
                    bets={bets}
                    setChosenBets={setChosenBets}
                    chosenBets={chosenBets}
                />
                {currentCategory != 'all'
                    ? filteredBets!.map((bet: Bet, key: any) => (
                          <BetTab
                              team1={bet.team1}
                              team2={bet.team2}
                              odds1={bet.odds1}
                              odds2={bet.odds2}
                              draw={bet.draw}
                              category={bet.category}
                              id={bet.id}
                              setChosenBets={setChosenBets}
                              key={key}
                              chosenBets={chosenBets}
                          />
                      ))
                    : bets &&
                      bets!.map((bet: Bet, key: any) => (
                          <BetTab
                              team1={bet.team1}
                              team2={bet.team2}
                              odds1={bet.odds1}
                              odds2={bet.odds2}
                              draw={bet.draw}
                              category={bet.category}
                              id={bet.id}
                              setChosenBets={setChosenBets}
                              key={key}
                              chosenBets={chosenBets}
                          />
                      ))}
            </div>
            <TicketTab
                chosenBets={chosenBets}
                setChosenBets={setChosenBets}
                userBalance={userBalance}
            />
        </div>
    )
}

export default MainView
