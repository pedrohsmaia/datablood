import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider } from '@my/ui'
import { useColorScheme } from 'react-native'

import { ToastViewport } from './toast/ToastViewport'
import config from '../tamagui.config'
import { QueryClientProvider } from './react-query/QueryProvider'
import { QueryClient } from '@tanstack/react-query'
import { Session } from '@supabase/supabase-js'
import { AuthProvider } from './auth'

export function Provider({
  children,
  initialSession,
  ...rest
}: Omit<TamaguiProviderProps, 'config'> & { initialSession?: Session | null }) {
  const queryClient = new QueryClient({
    // query config
  })
  const scheme = useColorScheme()

  return (
    <AuthProvider initialSession={initialSession}>
      <TamaguiProvider
        config={config}
        disableInjectCSS
        defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
        {...rest}
      >
        <ToastProvider
          swipeDirection="horizontal"
          duration={6000}
          native={
            [
              /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
              // 'mobile'
            ]
          }
        >
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

          <CustomToast />
          <ToastViewport />
        </ToastProvider>
      </TamaguiProvider>
    </AuthProvider>
  )
}
