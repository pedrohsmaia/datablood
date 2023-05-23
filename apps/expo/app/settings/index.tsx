import { SettingsScreen } from 'app/features/settings/screen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SettingsScreen />
    </SafeAreaView>
  )
}
