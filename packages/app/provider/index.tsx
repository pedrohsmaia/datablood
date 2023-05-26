import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider } from '@my/ui'

import { Session } from '@supabase/supabase-js'
import { QueryClient } from '@tanstack/react-query'
import config from '../tamagui.config'
import { AuthProvider } from './auth'
import { QueryClientProvider } from './react-query/QueryProvider'
import { SafeAreaProvider } from './safe-area/SafeAreaProvider'
import { UniversalThemeProvider, useRootTheme } from './theme/UniversalThemeProvider'
import { ToastViewport } from './toast/ToastViewport'

export function Provider({
  initialSession,
  ...rest
}: InnerProviderProps & { initialSession?: Session | null }) {
  return (
    <AuthProvider initialSession={initialSession}>
      <UniversalThemeProvider>
        <InnerProvider {...rest} />
      </UniversalThemeProvider>
    </AuthProvider>
  )
}

type InnerProviderProps = Omit<TamaguiProviderProps, 'config'>
const InnerProvider = ({ children, ...rest }: InnerProviderProps) => {
  const queryClient = new QueryClient({
    // query config
  })

  const [rootTheme] = useRootTheme()

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config} disableInjectCSS defaultTheme={rootTheme} {...rest}>
        <ToastProvider
          swipeDirection="up"
          swipeThreshold={20}
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
    </SafeAreaProvider>
  )
}
