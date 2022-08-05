import React from 'react'
import ConnectButton from './ConnectButton'

interface NavbarInterface {
    setCurrentTab: (value: string) => void
    currentTab: string
}

const Navbar = ({ setCurrentTab, currentTab }: NavbarInterface) => {
    return (
        <div className="w-full h-20 bg-violet-500 text-white flex items-center px-6 leading-none justify-between static">
            <div className="flex h-full items-center">
                <h1 className="text-2xl font-bold mr-16">web-3 bets</h1>
                <div
                    className={`${
                        currentTab === 'bets' && `bg-violet-600`
                    } h-full  flex items-center w-32 justify-center text-lg uppercase font-bold transition hover:bg-violet-600 cursor-pointer`}
                    onClick={() => setCurrentTab('bets')}
                >
                    Zakłady
                </div>
                <div
                    className={`${
                        currentTab === 'offer' && `bg-violet-600`
                    } h-full  flex items-center w-32 justify-center text-lg uppercase font-bold transition hover:bg-violet-600 cursor-pointer`}
                    onClick={() => setCurrentTab('offer')}
                >
                    Promocja
                </div>
            </div>
            <ConnectButton />
        </div>
    )
}

export default Navbar
