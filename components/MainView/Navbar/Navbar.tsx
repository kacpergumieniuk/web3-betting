import React from 'react'
import ConnectButton from './ConnectButton'

interface NavbarInterface {
    setCurrentTab: (value: string) => void
    currentTab: string
}

const Navbar = ({ setCurrentTab, currentTab }: NavbarInterface) => {
    return (
        <div className="w-[calc(100%-5rem)] h-20 bg-background-color text-white flex items-center px-6 justify-between absolute top-0 left-20 border-b-2 border-text-color">
            <div className="flex h-full items-center">
                <h1 className="text-2xl font-bold mr-16">web-3 bets</h1>
                <div
                    className={`${
                        currentTab === 'bets' && `bg-primary`
                    } h-full  flex items-center text-text-color w-32 justify-center text-base uppercase font-bold transition hover:bg-primary cursor-pointer`}
                    onClick={() => setCurrentTab('bets')}
                >
                    Zaklady
                </div>
                <div
                    className={`${
                        currentTab === 'offer' && `bg-primary`
                    } h-full  flex items-center w-32 text-text-color text-base justify-center uppercase font-bold transition hover:bg-primary cursor-pointer leading-base`}
                    onClick={() => setCurrentTab('offer')}
                >
                    <p>Promocja</p>
                </div>
            </div>
            <ConnectButton />
        </div>
    )
}

export default Navbar
