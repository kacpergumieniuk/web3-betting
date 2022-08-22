import React from 'react'
import { useEthers, shortenAddress } from '@usedapp/core'
import Link from 'next/link'

const ConnectButton = () => {
    const { activateBrowserWallet, account } = useEthers()

    return (
        <button
            className="border border-white border-4 p-3 rounded-3xl font-bold text-white leading-none cursor-pointer hover:bg-white hover:text-violet-500 transition"
            onClick={activateBrowserWallet}
        >
            {account ? (
                <Link href={`user/${account}`}>{shortenAddress(account)}</Link>
            ) : (
                'Connect to metamask'
            )}
        </button>
    )
}

export default ConnectButton
