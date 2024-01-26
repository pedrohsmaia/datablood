import { config, isWeb, TamaguiProvider as TamaguiProviderOG, useDidFinishSSR } from '@my/ui'

import { useRootTheme, useThemeSetting } from '../theme/UniversalThemeProvider'

export const TamaguiProvider = ({ children }: { children: React.ReactNode }) => {
  const [rootTheme] = useRootTheme()
  const themeSetting = useThemeSetting()
  const isHydrated = useDidFinishSSR()
  const defaultTheme = isHydrated && isWeb ? themeSetting.resolvedTheme : rootTheme

  return (
    <TamaguiProviderOG
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={defaultTheme}
    >
      {children}
    </TamaguiProviderOG>
  )
}
