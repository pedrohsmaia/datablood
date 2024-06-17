import { Link, Text } from '@my/ui'
import { HomeScreen } from 'app/features/home/screen'
import { useNavigation } from 'expo-router'
import { Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen({}) {
  // const navigation = useNavigation()
  return (
    <SafeAreaView
      style={{ flex: 1, minWidth: '100%', backgroundColor: '$red1' }}
      edges={['left', 'right', 'top']}
    >
      {/* <Pressable onPress={() => navigation.openDrawer()}>
        <Text>go to drawer</Text>
      </Pressable> */}
      <HomeScreen />
    </SafeAreaView>
  )
}
