import { Paragraph, SizableText, Spacer, YStack } from '@my/ui'
import rootPackageJson from '../../../../package.json'
import packageJson from '../../package.json'
import { Bell, Book, Info, Lock, LogOut, Mail, Moon, Twitter, Unplug } from '@tamagui/lucide-icons'
import { useThemeSetting } from 'app/provider/theme/UniversalThemeProvider'
import { useUser } from 'app/utils/useUser'
import { Settings } from './components/settings'
import { useRouter } from 'solito/router'
import { redirect } from 'app/utils/redirect'

export const SettingsScreen = () => {
  const { user, profile } = useUser()
  if (!user || !profile) {
    return null
  }

  return (
    <YStack f={1} gap="$2" jc="space-between">
      <Settings>
        <Spacer />
        <Settings.Items>
          <Settings.Group>
            <Settings.Item icon={Lock} href="/settings/change-password" accentColor="$green9">
              Change Password
            </Settings.Item>

            <Settings.Item icon={Mail} href="/settings/change-email" accentColor="$blue9">
              Change Email
            </Settings.Item>

            {/* <Settings.Item icon={Bell} href="/settings/notifications" accentColor="$orange9">
              Notifications
            </Settings.Item> */}
          </Settings.Group>

          <Settings.Group>
            <Settings.Item icon={Book} href="/privacy-policy" accentColor="$blue9">
              Privacy Policy
            </Settings.Item>

            <Settings.Item icon={Book} href="/terms-of-service" accentColor="$purple9">
              Terms Of Service
            </Settings.Item>

            <Settings.Item icon={Info} href="/about" accentColor="$blue9">
              About
            </Settings.Item>
          </Settings.Group>

          <Settings.Group>
            <Settings.Item
              icon={Twitter}
              onPress={() => redirect('https://twitter.com/tamagui_js')}
              accentColor="#1DA1F2"
            >
              Our Twitter
            </Settings.Item>
          </Settings.Group>

          <Settings.Group>
            <SettingsItemDarkModeAction />

            <SettingsItemLogoutAction />
          </Settings.Group>
        </Settings.Items>
      </Settings>
      {/* 
      NOTE: you should probably get the actual native version here using https://www.npmjs.com/package/react-native-version-info
      we just did a simple package.json read since we want to keep things simple for the starter
       */}
      <Paragraph py="$2" ta="center" theme="alt2">
        {rootPackageJson.name} {packageJson.version}
      </Paragraph>
    </YStack>
  )
}

const SettingsItemDarkModeAction = () => {
  const { toggle, current } = useThemeSetting()

  return (
    <Settings.Item
      icon={Moon}
      accentColor="$green9"
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
