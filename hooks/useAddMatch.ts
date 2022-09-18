import { useContractFunction } from '@usedapp/core'
import { contract } from '../utils/constants'

export const useAddMatch = () => {
    const { state, send : sendAddMatchTransaction } = useContractFunction(contract, 'createMatch', {
        transactionName: 'Create match',
    })
    const {status : addMatchStatus} = state
    return { addMatchStatus , sendAddMatchTransaction }
}
