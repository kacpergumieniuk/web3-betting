import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DAppProvider, Rinkeby, Config, Ropsten } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { withTRPC } from '@trpc/next'
import { AppType } from 'next/dist/shared/lib/utils'
import { AppRouter } from './api/trpc/[trpc]'

const config: Config = {
    readOnlyChainId: Ropsten.chainId,
    readOnlyUrls: {
        [Ropsten.chainId]: getDefaultProvider('ropsten'),
    },
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DAppProvider config={config}>
            <Component {...pageProps} />
        </DAppProvider>
    )
}

export default withTRPC<AppRouter>({
    config({ ctx }) {
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         */
        const url = process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}/api/trpc`
            : 'http://localhost:3000/api/trpc'
        return {
            url,
            /**
             * @link https://react-query.tanstack.com/reference/QueryClient
             */
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        }
    },
    /**
     * @link https://trpc.io/docs/ssr
     */
    ssr: true,
})(MyApp)
