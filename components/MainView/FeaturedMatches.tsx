import React, { useEffect, useState } from 'react'
import { FeaturedMatches } from '../../common/types'
import { Bet } from '@prisma/client'

const FeaturedMatches = ({ bets }: FeaturedMatches) => {
    const [featuredBets, setFeaturedBets] = useState<Bet[]>([])
    const [currentChosenFeaturedBet, setCurrentChosenFeaturedBet] =
        useState<number>(0)

    useEffect(() => {
        bets.length && setFeaturedBets(bets.slice(0, 5))
        console.log('lol')
    }, [])

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
                    <div className="border w-14 cursor-pointer flex items-center justify-center">
                        <p>
                            <span className="text-xs mr-1 text-gray-400">
                                1.
                            </span>
                            {featuredBets.length &&
                                featuredBets[currentChosenFeaturedBet].odds1}
                        </p>
                    </div>
                    <div className="border w-14 cursor-pointer flex items-center justify-center">
                        <p>
                            <span className="text-xs mr-1 text-gray-400">
                                x
                            </span>
                            {featuredBets.length &&
                                featuredBets[currentChosenFeaturedBet].draw}
                        </p>
                    </div>
                    <div className="border w-14 cursor-pointer flex items-center justify-center h-11">
                        <p>
                            <span className="text-xs mr-1 text-gray-400">
                                2.
                            </span>
                            {featuredBets.length &&
                                featuredBets[currentChosenFeaturedBet].odds2}
                        </p>
                    </div>
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
