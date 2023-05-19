import { HomeScreen } from 'app/features/home/screen'
import { Tabs } from 'expo-router'
import { Home } from '@tamagui/lucide-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  )
}
