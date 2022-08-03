import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import BetTab from '../components/BetTab'

const Home: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('bets')
    const [bets, setBets] = useState<Array<any>>([])
    useEffect(() => {
        fetch('http://localhost:3000/api/bets')
            .then((res) => res.json())
            .then((data) => setBets(data.results))
    }, [])
    return (
        <div className=" bg-zinc-200 w-screen h-screen">
            <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />
            <div className="flex justify-center items-center flex-col">
                {bets.map((bet: any) => (
                    <BetTab
                        team1={bet.team1}
                        team2={bet.team2}
                        odds1={bet.odds1}
                        odds2={bet.odds2}
                        draw={bet.draw}
                        id={bet.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
