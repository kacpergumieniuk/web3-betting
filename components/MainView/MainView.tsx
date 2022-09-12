import { useState } from 'react'
import { Bet, PrismaClient } from '@prisma/client'
import { ChosenBetsInterface } from '../../common/types'
import BetTab from '../../components/MainView/BetTab/BetTab'
import TicketTab from '../../components/MainView/TicketTab'
import { MainView } from '../../common/types'
import FeaturedMatches from './FeaturedMatches'

const MainView = ({ filteredBets, bets, currentCategory }: MainView) => {
    const [chosenBets, setChosenBets] = useState<Array<ChosenBetsInterface>>([])
    const [userBalance, setUserBalance] = useState<number>(200)

    return (
        <div className="flex pt-16 min-h-screen justify-center mr-20 ml-16">
            <div className="flex-col flex mt-8 w-8/12">
                <FeaturedMatches bets={bets} />
                {currentCategory != 'all'
                    ? filteredBets!.map((bet: Bet, key: any) => (
                          <BetTab
                              team1={bet.team1}
                              team2={bet.team2}
                              odds1={bet.odds1}
                              odds2={bet.odds2}
                              draw={bet.draw}
                              category={bet.category}
                              id={bet.id}   // TODO: Id sie nie zaciąga, trzeba odświeżyć stronke
                              setChosenBets={setChosenBets}
                              key={key}
                              chosenBets={chosenBets}
                              result={bet.result}
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
                              result={bet.result}
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
