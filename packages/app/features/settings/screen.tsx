import { SizableText } from '@my/ui'
import { Bell, Book, Info, Lock, LogOut, Mail, Moon } from '@tamagui/lucide-icons'
import { useThemeSetting } from 'app/provider/theme/UniversalThemeProvider'
import { useUser } from 'app/utils/useUser'
import { Settings } from './components/settings'

export const SettingsScreen = () => {
  const { user, profile } = useUser()
  if (!user || !profile) {
    return null
  }

  // const insets = useSafeAreaInsets()
  return (
    <Settings>
      <Settings.Title>Settings</Settings.Title>

      <Settings.Items>
        <Settings.Group>
          <Settings.Item icon={Lock} href="/settings/change-password" accentColor="$green9">
            Change Password
          </Settings.Item>

          <Settings.Item icon={Mail} href="/settings/change-email" accentColor="$blue9">
            Change Email
          </Settings.Item>

          <Settings.Item icon={Bell} href="/settings/notifications" accentColor="$orange9">
            Notifications
          </Settings.Item>
        </Settings.Group>

        <Settings.Group>
          <SettingsItemDarkModeAction />

          <Settings.Item icon={Book} href="/settings/privacy" accentColor="$purple9">
            Privacy
          </Settings.Item>

          <Settings.Item icon={Info} href="/settings/info" accentColor="$blue9">
            About
          </Settings.Item>

          <SettingsItemLogoutAction />
        </Settings.Group>
      </Settings.Items>
    </Settings>
  )
}

const SettingsItemDarkModeAction = () => {
  const { toggle, current } = useThemeSetting()

  return (
    <Settings.Item
      icon={Moon}
      accentColor="$gray9"
      onPress={toggle}
      rightSide={
        <SizableText color="$color11" textTransform="capitalize">
          {current}
        </SizableText>
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
    </Settings.Item>
  )
}

const SettingsItemLogoutAction = () => {
  const { logOut } = useUser()

  return (
    <Settings.Item icon={LogOut} accentColor="$red9" onPress={() => logOut()}>
      Log Out
    </Settings.Item>
  )
}
