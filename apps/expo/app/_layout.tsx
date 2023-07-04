import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useThemeSetting } from 'app/provider/theme/UniversalThemeProvider'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useProtectedRoute } from '../utils/useProtectedRoute'
// import { LogBox } from 'react-native'

// LogBox.ignoreAllLogs()

export default function HomeLayout() {
  return (
    <Provider>
      <InnerStack />
    </Provider>
  )
}

const InnerStack = () => {
  const { initialLoading } = useProtectedRoute()
  const { resolvedTheme } = useThemeSetting()
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  return (
    <>
      {(initialLoading || !fontLoaded) && <SplashScreen />}
      <ThemeProvider value={resolvedTheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="create"
            options={{
              title: 'New Project',
              headerShown: true,
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  )
}
