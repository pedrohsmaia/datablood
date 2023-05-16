import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useThemeSetting } from 'app/provider/theme/UniversalThemeProvider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useProtectedRoute } from '../utils/useProtectedRoute'
import { Text, Theme } from '@my/ui'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <InnerStack />
    </Provider>
  )
}

const InnerStack = () => {
  useProtectedRoute()
  const { resolvedTheme } = useThemeSetting()

  return (
    <ThemeProvider value={resolvedTheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack />
    </ThemeProvider>
  )
}
