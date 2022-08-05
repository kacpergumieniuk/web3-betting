import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import BetTab from '../components/BetTab'
import TicketTab from '../components/TicketTab'

const Home: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('bets')
    const [bets, setBets] = useState<Array<any>>([])
    const [chosenBets, setChosenBets] = useState<Array<any>>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/bets')
            .then((res) => res.json())
            .then((data) => setBets(data.results))
    }, [])
    return (
        <div className=" bg-zinc-200 w-screen">
            <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />
            <div className="flex w-screen">
                <TicketTab />
                <div className="flex-col flex basis-1/2 mt-8">
                    {bets.map((bet: any, key) => (
                        <BetTab
                            team1={bet.team1}
                            team2={bet.team2}
                            odds1={bet.odds1}
                            odds2={bet.odds2}
                            draw={bet.draw}
                            id={bet.id}
                            setChosenBets={setChosenBets}
                            key={key}
                        />
                    ))}
                </div>
                <TicketTab chosenBets={chosenBets} />
                {/*     <p onClick={() => console.log(chosenBets)}> LOL</p> */}
            </div>
        </div>
    )
}

export default Home
