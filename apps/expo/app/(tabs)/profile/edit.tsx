import { EditProfileScreen } from 'app/features/profile/edit-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <EditProfileScreen />
    </SafeAreaView>
  )
}
