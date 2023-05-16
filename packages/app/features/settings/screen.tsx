import { SizableText, YStack } from '@my/ui'
import { Lock, LogOut, Mail, Moon } from '@tamagui/lucide-icons'
import { useThemeSetting } from 'app/provider/theme/UniversalThemeProvider'
import { useUser } from 'app/utils/useUser'
import { SettingGroup } from './components/group'
import { SettingItem } from './components/item'
import { SettingTitle } from './components/title'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {
  const { user, profile } = useUser()
  if (!user || !profile) {
    return null
  }

  // const insets = useSafeAreaInsets()
  return (
    <YStack gap="$5" f={1} px="$5" py="$10">
      <SettingTitle backHref="/">Settings</SettingTitle>

      <YStack gap="$4">
        <SettingGroup>
          <SettingItemDarkModeAction />
        </SettingGroup>
        <SettingGroup>
          <SettingItem icon={Lock} href="/settings/change-password" accentColor="$green9">
            Change Password
          </SettingItem>

          <SettingItem icon={Mail} href="/settings/change-email" accentColor="$purple9">
            Change Email
          </SettingItem>

          <SettingLogoutAction />
        </SettingGroup>
      </YStack>
    </YStack>
  )
}

const SettingItemDarkModeAction = () => {
  const { toggle, resolvedTheme, current } = useThemeSetting()

  return (
    <SettingItem
      icon={Moon}
      accentColor="$blue9"
      cursor="default"
      onPress={toggle}
      rightSide={
        <SizableText color="$color11">{current}</SizableText>
        // <Switch
        //   size="$4"
        //   checked={resolvedTheme === 'dark'}
        //   onCheckedChange={() => set(resolvedTheme === 'dark' ? 'light' : 'dark')}
        // >
        //   <Switch.Thumb animation="100ms" />
        // </Switch>
      }
    >
      Theme
    </SettingItem>
  )
}

const SettingLogoutAction = () => {
  const { logOut } = useUser()

  return (
    <SettingItem icon={LogOut} accentColor="$red9" onPress={() => logOut()}>
      Log Out
    </SettingItem>
  )
}
