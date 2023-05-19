import { ProfileScreen } from 'app/features/profile/screen'
import { Tabs } from 'expo-router'
import { User } from '@tamagui/lucide-icons'
import { Theme } from '@my/ui'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileScreen />
    </SafeAreaView>
  )
}
