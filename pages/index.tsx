import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Home: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('bets')
    return (
        <>
            <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />
        </>
    )
}

export default Home
