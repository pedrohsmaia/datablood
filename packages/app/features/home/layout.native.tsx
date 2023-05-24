import { Avatar, Circle, Theme, YStack } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Home, Plus } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import { Tabs } from 'expo-router'
import { useRouter } from 'solito/router'
import type { HomeLayoutProps } from './layout'

export const HomeLayout = ({}: HomeLayoutProps) => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="_create"
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault()
              navigation.navigate('create')
            },
          })}
          options={{
            title: 'New',
            tabBarIcon: ({ size }) => {
              const router = useRouter()

              return (
                <Theme inverse>
                  <Circle
                    pos="absolute"
                    bottom={5}
                    backgroundColor="$color0"
                    shadowOpacity={0.5}
                    shadowRadius={2}
                    shadowOffset={{
                      height: 3,
                      width: 0,
                    }}
                    width={size + 40}
                    height={size + 40}
                  />
                  <LinearGradient
                    onPress={() => router.push('/create')}
                    colors={['$color1', '$color9']}
                    start={[1, 1]}
                    end={[0, 0]}
                    width={size + 40}
                    height={size + 40}
                    borderRadius={100}
                    pos="absolute"
                    bottom={5}
                    animation="quick"
                    pressStyle={{
                      rotate: '50deg',
                    }}
                  />
                  <YStack
                    pos="absolute"
                    bottom={5}
                    jc="center"
                    ai="center"
                    animation="quick"
                    pointerEvents="none"
                    height={size + 40}
                  >
                    <Plus color="$color" size={size + 20} />
                  </YStack>
                </Theme>
              )
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => {
              const { getAvatar } = useUser()
              return (
                <YStack borderWidth="$1" borderColor={color} borderRadius={100}>
                  <Avatar circular p="$1" size={size}>
                    <Avatar.Image source={{ uri: getAvatar() }} />
                  </Avatar>
                </YStack>
              )
            },
          }}
        />
      </Tabs>
    </>
  )
}
