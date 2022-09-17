import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/MainView/Navbar/Navbar'
import { useState, useEffect } from 'react'
import BetTab from '../components/MainView/BetTab/BetTab'
import TicketTab from '../components/MainView/TicketTab'
import { useEthers } from '@usedapp/core'
import { ChosenBetsInterface } from '../common/types'
import { Bet, PrismaClient } from '@prisma/client'
import Sidebar from '../components/MainView/Sidebar/Sidebar'
import AdminPanel from '../components/AdminPanel/AdminPanel'
import MainView from '../components/MainView/MainView'
import UserPanel from '../components/UserPanel/UserPanel'
import { trpc } from '../utils/trpc'

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
            {currentTab === 'bets' && (
                <Sidebar
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                />
            )}

            {currentTab === 'bets' && (
                <MainView
                    filteredBets={filteredBets}
                    bets={bets}
                    currentCategory={currentCategory}
                />
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
            {currentTab === 'user' && <UserPanel />}
        </div>
    )
}

export default Home
