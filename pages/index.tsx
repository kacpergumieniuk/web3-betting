import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/MainView/Navbar/Navbar'
import { useState, useEffect } from 'react'
import BetTab from '../components/MainView/BetTab/BetTab'
import TicketTab from '../components/MainView/TicketTab'
import { useEthers } from '@usedapp/core'
import { ChosenBetsInterface, BetsInterface } from '../common/types'
import { Bet } from '@prisma/client'

const Home: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('bets')
    const [bets, setBets] = useState<Array<BetsInterface>>([])
    const [chosenBets, setChosenBets] = useState<Array<ChosenBetsInterface>>([])
    const { error } = useEthers()
    const axios = require('axios').default

    useEffect(() => {
        axios.get('/api/bets').then((res: any) => setBets(res.data))
    }, [])
    return (
        <div className=" bg-zinc-200">
            <Head>
                <title>Web3 Betting</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />
            <div className="flex pt-16">
                <TicketTab />
                <div className="flex-col flex basis-1/2 mt-8">
                    {bets!.map((bet: BetsInterface, key) => (
                        <BetTab
                            team1={bet.team1}
                            team2={bet.team2}
                            odds1={bet.odds1}
                            odds2={bet.odds2}
                            draw={bet.draw}
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
                />
            </div>
        </div>
    )
}

export default Home
