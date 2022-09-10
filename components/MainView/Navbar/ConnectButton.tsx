import React from 'react'
import { useEthers, shortenAddress } from '@usedapp/core'
import { ConnectButton } from '../../../common/types'

const ConnectButton = ({ setCurrentTab }: ConnectButton) => {
    const { activateBrowserWallet, account } = useEthers()

    return (
        <button
            className={`border border-white border p-3 text-xs text-white leading-none cursor-pointer ${
                account && 'text-base border-0'
            }`}
            onClick={activateBrowserWallet}
        >
            {account ? (
                <p onClick={() => setCurrentTab('user')}>
                    {shortenAddress(account)}
                </p>
            ) : (
                'Connect to metamask'
            )}
        </button>
    )
}

export default ConnectButton
