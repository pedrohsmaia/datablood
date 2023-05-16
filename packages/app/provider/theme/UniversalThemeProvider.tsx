import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

export const UniversalThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useRootTheme()
  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      {children}
    </NextThemeProvider>
  )
}

export { useThemeSetting, useRootTheme } from '@tamagui/next-theme'
