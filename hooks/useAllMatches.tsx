import { Contract } from '@ethersproject/contracts'
import { useCall } from '@usedapp/core'

export function useAllMatches(contract: Contract) {
    const { value, error } =
        useCall({
            contract: contract,
            method: 'getAllMatches',
            args: [],
        }) ?? {}
    if (error) {
        console.error(error.message)
        return undefined
    }
    return value?.[0]
}
