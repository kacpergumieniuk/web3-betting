import React from 'react'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const UserPanel = () => {
    /*  const { account } = useEthers()
    const balance = useEtherBalance(account) */

    return (
        <div className="min-h-screen pt-20 text-white px-14 w-screen">
            <div className="pt-9 flex gap-8">
                <div className="w-5/12 border h-44  px-5">
                    <div className="flex justify-between pt-4 mb-6">
                        <p>Total income:</p>
                        <p>From day one - till now</p>
                    </div>
                    <p className="text-5xl">+12.500$</p>
                </div>
                <div className="w-4/12 border h-44 px-5">
                    <p className="pt-4 mb-6">Current balance:</p>
                    <p className="text-5xl">0.72 ETH</p>
                </div>
                <div className="w-3/12 border h-44  px-5">
                    <p className="pt-4 mb-6">Total wins:</p>
                    <p className="text-5xl">1/2</p>
                </div>
            </div>
        </div>
    )
}

export default UserPanel
