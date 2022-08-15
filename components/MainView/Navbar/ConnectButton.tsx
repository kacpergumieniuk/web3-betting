import React from 'react'
import { useEthers, shortenAddress } from '@usedapp/core'
import { utils } from 'ethers'

const ConnectButton = () => {
    const { activateBrowserWallet, account } = useEthers()

    return (
        <div
            className="border border-white border-4 p-3 rounded-3xl font-bold text-white cursor-pointer hover:bg-white hover:text-violet-500 transition"
            onClick={activateBrowserWallet}
        >
            {account ? shortenAddress(account) : 'Connect to Metamask'}
        </div>
    )
}

export default ConnectButton
