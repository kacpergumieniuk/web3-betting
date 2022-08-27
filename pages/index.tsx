import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/MainView/Navbar/Navbar'
import { useState, useEffect } from 'react'
import BetTab from '../components/MainView/BetTab/BetTab'
import TicketTab from '../components/MainView/TicketTab'
import { useEthers } from '@usedapp/core'
import { ChosenBetsInterface } from '../common/types'
import { Bet, PrismaClient } from '@prisma/client'
import Sidebar from '../components/MainView/Sidebar/Sidebar'
import AdminPanel from '../components/AdminPanel/AdminPanel'

const prisma = new PrismaClient()

export const getServerSideProps = async () => {
    const res = await prisma.bet.findMany()
    return {
        props: { initialBets: res },
    }
}

const Home: NextPage = ({ initialBets }: any) => {
    const [currentTab, setCurrentTab] = useState<string>('bets')
    const [bets, setBets] = useState<Bet[]>(initialBets)
    const [filteredBets, setFilteredBets] = useState<Bet[]>(bets)
    const [chosenBets, setChosenBets] = useState<Array<ChosenBetsInterface>>([])
    const [currentCategory, setCurrentCategory] = useState<string>('all')
    const [userBalance, setUserBalance] = useState<number>(200)

    async function saveBet(bet: Bet) {
        const response = await fetch('/api/bets', {
            method: 'POST',
            body: JSON.stringify(bet),
        })
        return await response.json()
    }

    useEffect(() => {
        const arr = bets.filter((bet) => {
            return bet.category === currentCategory
        })
        setFilteredBets(arr)
    }, [currentCategory])

    return (
        <div className={`bg-background-color`}>
            <Head>
                <title>Web3 Betting</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <link
                rel="stylesheet"
                href="https://use.typekit.net/gdr3vyw.css"
            ></link>
            <Navbar
                userBalance={userBalance}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            />
            <Sidebar
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            />
            {currentTab === 'bets' && (
                <div className="flex pt-16 bg-background-color">
                    <div className="flex-col flex basis-3/4 mt-8 pl-40">
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
            )}
            {currentTab === 'admin' && (
                <AdminPanel
                    onSubmit={async (data: Bet, e: any) => {
                        try {
                            saveBet(data)
                            setBets([...bets, data])
                            e.target.reset()
                        } catch (err) {
                            console.log(err)
                        }
                    }}
                />
            )}
        </div>
    )
}

export default Home
