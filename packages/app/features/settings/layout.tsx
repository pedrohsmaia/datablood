import { FullscreenSpinner, Separator, XStack, YStack } from '@my/ui'
import { useUser } from 'app/utils/useUser'
import { SettingsScreen } from './screen'

export type SettingsLayoutProps = {
  /**
   * web-only
   */
  isSettingsHome?: boolean
  /**
   * web-only
   */
  children?: React.ReactNode
}

export const SettingsLayout = ({ children, isSettingsHome = false }: SettingsLayoutProps) => {
  const { isLoading, user } = useUser()
  if (isLoading || !user) {
    return <FullscreenSpinner />
  }

  return (
    <XStack separator={<Separator vertical />} f={1}>
      <YStack f={1} $sm={{ display: isSettingsHome ? 'flex' : 'none' }}>
        <SettingsScreen />
      </YStack>
      <YStack f={4} ai="center" $sm={{ display: isSettingsHome ? 'none' : 'block' }}>
        <YStack
          $gtSm={{
            minWidth: 500,
          }}
        >
          {children}
        </YStack>
      </YStack>
    </XStack>
  )
}
