import { useEffect } from 'react'
import ConnectButton from './ConnectButton'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { NavbarInterface } from '../../../common/types'
import { formatEther } from '@ethersproject/units'

const Navbar = ({
    setCurrentTab,
    currentTab,
    userBalance,
}: NavbarInterface) => {
    const { account } = useEthers()
    const etherBalance = useEtherBalance(account)

    useEffect(() => {
        account != '0xc88c968247fA896e03df9549F475b0E916AE8ac1' &&
            setCurrentTab('bets')
    }, [account])

    return (
        <div className="w-full h-16 bg-background-color text-white flex items-center px-4 justify-between fixed top-0 left-0 border-b border-text-color z-10">
            <div className="flex h-full items-center">
                <h1
                    className="text-2xl font-light mr-16 tracking-widest cursor-pointer"
                    onClick={() => setCurrentTab('bets')}
                >
                    WEB3BETS
                </h1>
                <div
                    className={`${
                        currentTab === 'bets' && `bg-primary`
                    } h-full  flex items-center text-text-color w-32 justify-center text-base font-bold transition hover:bg-primary cursor-pointer`}
                    onClick={() => setCurrentTab('bets')}
                >
                    <p>Matches</p>
                </div>
                {/* <div
                    className={`${
                        currentTab === 'offer' && `bg-primary`
                    } h-full  flex items-center w-32 text-text-color text-base justify-center uppercase font-bold transition hover:bg-primary cursor-pointer leading-base`}
                    onClick={() => setCurrentTab('offer')}
                >
                    <p>Promocja</p>
                </div> */}
                {account! === '0xc88c968247fA896e03df9549F475b0E916AE8ac1' && (
                    <div
                        className={`${
                            currentTab === 'admin' && `bg-primary`
                        } h-full  flex items-center w-32 text-text-color text-base justify-center font-bold transition hover:bg-primary cursor-pointer leading-base`}
                        onClick={() => setCurrentTab('admin')}
                    >
                        <p>Admin</p>
                    </div>
                )}
            </div>
            <div className="flex items-center font-bold gap-3">
                {account && (
                    <p>
                        Balance: {etherBalance && formatEther(etherBalance!)}{' '}
                        ETH
                    </p>
                )}
                <ConnectButton setCurrentTab={setCurrentTab} />
            </div>
        </div>
    )
}

export default Navbar
