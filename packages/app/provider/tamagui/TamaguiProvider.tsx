import { config, isWeb, TamaguiProvider as TamaguiProviderOG, useDidFinishSSR } from '@my/ui'

import { useRootTheme, useThemeSetting } from '../theme/UniversalThemeProvider'

export const TamaguiProvider = ({ children }: { children: React.ReactNode }) => {
  const [rootTheme] = useRootTheme()
  const themeSetting = useThemeSetting()
  const isHydrated = useDidFinishSSR()

  return (
    <TamaguiProviderOG
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={isHydrated && isWeb ? themeSetting.current : rootTheme}
    >
      {children}
    </TamaguiProviderOG>
  )
}
