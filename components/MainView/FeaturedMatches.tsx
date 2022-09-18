import React, { useEffect, useState } from 'react'
import { FeaturedMatches } from '../../common/types'
import { Bet } from '@prisma/client'
import BetTabButton from './BetTab/BetTabButton'

const FeaturedMatches = ({
    bets,
    setChosenBets,
    chosenBets,
}: FeaturedMatches) => {
    const [featuredBets, setFeaturedBets] = useState<Bet[]>([])
    const [currentChosenFeaturedBet, setCurrentChosenFeaturedBet] =
        useState<number>(0)
    const [isTabChosen, setIsTabChosen] = useState<boolean>(false)

    useEffect(() => {
        bets.length && setFeaturedBets(bets.slice(0, 5))
    }, [])

    useEffect(() => {
        chosenBets.filter(
            (bet) => bet.id === featuredBets[currentChosenFeaturedBet].id
        ).length > 0
            ? setIsTabChosen(true)
            : setIsTabChosen(false)
    }, [chosenBets, currentChosenFeaturedBet])

    /* const handleNextFeaturedBet = () => {
        currentChosenFeaturedBet === 4
            ? setCurrentChosenFeaturedBet(0)
            : setCurrentChosenFeaturedBet(currentChosenFeaturedBet + 1)
    } */
    /* setInterval(() => {
        handleNextFeaturedBet()
    }, 20000) <-- TO FIX */

    return (
        <div className="bg-primary h-64 mb-10 text-white relative">
            <div className="absolute left-6 bottom-6 flex flex-col ">
                <p className="mb-2">
                    {featuredBets.length &&
                        featuredBets[currentChosenFeaturedBet].team1}{' '}
                    <span className="mx-3 text-sm">vs</span>{' '}
                    {featuredBets.length &&
                        featuredBets[currentChosenFeaturedBet].team2}
                </p>
                <div className="flex gap-3">
                    {featuredBets.length && (
                        <BetTabButton
                            team1={featuredBets[currentChosenFeaturedBet].team1}
                            team2={featuredBets[currentChosenFeaturedBet].team2}
                            id={featuredBets[currentChosenFeaturedBet].id}
                            odds={featuredBets[currentChosenFeaturedBet].odds1}
                            setChosenBets={setChosenBets}
                            winner={
                                featuredBets[currentChosenFeaturedBet].team1
                            }
                            disabled={isTabChosen}
                        />
                    )}
                    {featuredBets.length && (
                        <BetTabButton
                            team1={featuredBets[currentChosenFeaturedBet].team1}
                            team2={featuredBets[currentChosenFeaturedBet].team2}
                            id={featuredBets[currentChosenFeaturedBet].id}
                            odds={featuredBets[currentChosenFeaturedBet].draw}
                            setChosenBets={setChosenBets}
                            winner={'Remis'}
                            disabled={isTabChosen}
                        />
                    )}
                    {featuredBets.length && (
                        <BetTabButton
                            team1={featuredBets[currentChosenFeaturedBet].team1}
                            team2={featuredBets[currentChosenFeaturedBet].team2}
                            id={featuredBets[currentChosenFeaturedBet].id}
                            odds={featuredBets[currentChosenFeaturedBet].odds2}
                            setChosenBets={setChosenBets}
                            winner={
                                featuredBets[currentChosenFeaturedBet].team2
                            }
                            disabled={isTabChosen}
                        />
                    )}
                </div>
            </div>
            <div className="absolute right-8 bottom-8 flex gap-2">
                <div
                    className={`border cursor-pointer ${
                        currentChosenFeaturedBet === 0 ? 'p-1' : 'p-2'
                    }`}
                    onClick={() => setCurrentChosenFeaturedBet(0)}
                >
                    {currentChosenFeaturedBet === 0 && (
                        <div className="p-1 bg-white"></div>
                    )}
                </div>
                <div
                    className={`border cursor-pointer ${
                        currentChosenFeaturedBet === 1 ? 'p-1' : 'p-2'
                    }`}
                    onClick={() => setCurrentChosenFeaturedBet(1)}
                >
                    {currentChosenFeaturedBet === 1 && (
                        <div className="p-1 bg-white"></div>
                    )}
                </div>
                <div
                    className={`border cursor-pointer ${
                        currentChosenFeaturedBet === 2 ? 'p-1' : 'p-2'
                    }`}
                    onClick={() => setCurrentChosenFeaturedBet(2)}
                >
                    {currentChosenFeaturedBet === 2 && (
                        <div className="p-1 bg-white"></div>
                    )}
                </div>
                <div
                    className={`border cursor-pointer ${
                        currentChosenFeaturedBet === 3 ? 'p-1' : 'p-2'
                    }`}
                    onClick={() => setCurrentChosenFeaturedBet(3)}
                >
                    {currentChosenFeaturedBet === 3 && (
                        <div className="p-1 bg-white"></div>
                    )}
                </div>
                <div
                    className={`border cursor-pointer ${
                        currentChosenFeaturedBet === 4 ? 'p-1' : 'p-2'
                    }`}
                    onClick={() => setCurrentChosenFeaturedBet(4)}
                >
                    {currentChosenFeaturedBet === 4 && (
                        <div className="p-1 bg-white"></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FeaturedMatches
