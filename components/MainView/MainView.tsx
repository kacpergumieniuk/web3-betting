import { useState } from 'react'
import { Bet, PrismaClient } from '@prisma/client'
import { ChosenBetsInterface } from '../../common/types'
import BetTab from '../../components/MainView/BetTab/BetTab'
import TicketTab from '../../components/MainView/TicketTab'
import { MainView } from '../../common/types'

const MainView = ({ filteredBets, bets, currentCategory }: MainView) => {
    const [chosenBets, setChosenBets] = useState<Array<ChosenBetsInterface>>([])
    const [userBalance, setUserBalance] = useState<number>(200)

    return (
        <div className="flex pt-16 bg-background-color  min-h-screen">
            <div className="flex-col flex basis-3/5 mt-8 ml-60">
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
                    : bets!.map((bet: Bet, key: any) => (
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
