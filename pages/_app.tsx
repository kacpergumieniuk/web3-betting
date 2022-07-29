import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DAppProvider, Rinkeby, Config } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config: Config = {
    readOnlyChainId: Rinkeby.chainId,
    readOnlyUrls: {
        [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
    },
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DAppProvider config={config}>
            <Component {...pageProps} />
        </DAppProvider>
    )
}

export default MyApp
