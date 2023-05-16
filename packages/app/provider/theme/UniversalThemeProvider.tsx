import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

// is handled on _app.tsx
export const UniversalThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export { useThemeSetting, useRootTheme } from '@tamagui/next-theme'
