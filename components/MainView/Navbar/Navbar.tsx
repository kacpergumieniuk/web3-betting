import { useEffect } from 'react'
import ConnectButton from './ConnectButton'
import { useEthers } from '@usedapp/core'

interface NavbarInterface {
    setCurrentTab: (value: string) => void
    currentTab: string
}

const Navbar = ({ setCurrentTab, currentTab }: NavbarInterface) => {
    const { account } = useEthers()

    useEffect(() => {
        account != '0xc88c968247fA896e03df9549F475b0E916AE8ac1' &&
            setCurrentTab('bets')
    }, [account])

    return (
        <div className="w-[calc(100%-5rem)] h-20 bg-background-color text-white flex items-center px-6 justify-between absolute top-0 left-20 border-b border-text-color">
            <div className="flex h-full items-center">
                <h1 className="text-2xl font-bold mr-16">web-3 bets</h1>
                <div
                    className={`${
                        currentTab === 'bets' && `bg-primary`
                    } h-full  flex items-center text-text-color w-32 justify-center text-base uppercase font-bold transition hover:bg-primary cursor-pointer`}
                    onClick={() => setCurrentTab('bets')}
                >
                    <p>Zakłady</p>
                </div>
                <div
                    className={`${
                        currentTab === 'offer' && `bg-primary`
                    } h-full  flex items-center w-32 text-text-color text-base justify-center uppercase font-bold transition hover:bg-primary cursor-pointer leading-base`}
                    onClick={() => setCurrentTab('offer')}
                >
                    <p>Promocja</p>
                </div>
                {account! === '0xc88c968247fA896e03df9549F475b0E916AE8ac1' && (
                    <div
                        className={`${
                            currentTab === 'admin' && `bg-primary`
                        } h-full  flex items-center w-32 text-text-color text-base justify-center uppercase font-bold transition hover:bg-primary cursor-pointer leading-base`}
                        onClick={() => setCurrentTab('admin')}
                    >
                        <p>Admin</p>
                    </div>
                )}
            </div>
            <ConnectButton />
        </div>
    )
}

export default Navbar
