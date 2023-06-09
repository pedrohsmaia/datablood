import { Avatar, Circle, Theme, YStack, getVariable } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Home, Plus } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import { Tabs } from 'expo-router'
import { useRouter } from 'solito/router'
import type { HomeLayoutProps } from './layout'
import { SolitoImage } from 'solito/image'

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
                    backgroundColor="$color1"
                    shadowColor="$color1"
                    shadowOpacity={1}
                    shadowRadius={3}
                    shadowOffset={{
                      height: 0,
                      width: 0,
                    }}
                    width={size + 40}
                    height={size + 40}
                  />
                  <LinearGradient
                    onPress={() => router.push('/create')}
                    colors={['$gray1', '$gray7']}
                    start={[1, 1]}
                    end={[0.8, 0]}
                    width={size + 40}
                    height={size + 40}
                    borderRadius={100}
                    pos="absolute"
                    bottom={5}
                    pressStyle={{
                      rotate: '180deg',
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
              const { avatarUrl } = useUser()
              return (
                <YStack borderWidth="$1" borderColor={color} borderRadius={100}>
                  <Avatar circular p="$1" size={size}>
                    <SolitoImage src={avatarUrl} alt="your avatar" width={size} height={size} />
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
