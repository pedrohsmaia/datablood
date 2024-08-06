import type { AppRouter } from '@my/api'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import SuperJSON from 'superjson'
import { SessionContext } from 'app/provider/auth/AuthProvider.native'
import { getBaseUrl } from './getBaseUrl'

export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      queryClientConfig: {
        // web query config
      },
      transformer: SuperJSON,
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,

          // You can pass any HTTP headers you wish here
          async headers() {
            const headers: Record<string, string> = {}

            // Get the session from the context
            const sessionContext = SessionContext._currentValue
            const token = sessionContext?.session?.access_token

            if (token) {
              headers['Authorization'] = `Bearer ${token}`
              headers['x-tamagui-request-platform'] = 'native'
            }

            return headers
          },
        }),
      ],
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
})
