import { FullscreenSpinner, Separator, XStack, YStack } from '@my/ui'
import { SettingsScreen } from './screen'
import { useUser } from 'app/utils/useUser'
import { useRouter } from 'solito/router'

// for web only
export const SettingsLayout = ({
  children,
  isSettingsHome = false,
}: {
  isSettingsHome?: boolean
  children: React.ReactNode
}) => {
  const { isLoading, user } = useUser()
  const router = useRouter()
  if (isLoading || !user) {
    return <FullscreenSpinner />
  }

  return (
    <XStack separator={<Separator vertical />} f={1}>
      <YStack f={1} minWidth={300} $sm={{ display: isSettingsHome ? 'flex' : 'none' }}>
        <SettingsScreen />
      </YStack>
      <YStack f={4} ai="center" $sm={{ display: isSettingsHome ? 'none' : 'block' }}>
        <YStack minWidth={500}>{children}</YStack>
      </YStack>
    </XStack>
  )
}
