import { Avatar, Button, SizableText, Spinner, XStack, YStack } from '@my/ui'
import { FullscreenSpinner } from '@my/ui/src'
import { Upload } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'

export const SettingsScreen = () => {
  const { user, profile } = useUser()
  if (!user || !profile) {
    return <FullscreenSpinner />
  }

  return (
    <YStack>
      <Header />
    </YStack>
  )
}

const Header = () => {
  const { user, profile } = useUser()
  return (
    <YStack>
      <EditableAvatar />
      <SizableText>{profile?.first_name ?? 'No Name'}</SizableText>
    </YStack>
  )
}

const EditableAvatar = () => {
  const { user, profile } = useUser()

  return (
    <XStack justifyContent="flex-start" ai="flex-start">
      <Avatar circular size="$10">
        <Avatar.Image
          source={{
            uri:
              user?.user_metadata.avatar_url ??
              `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${profile?.first_name}`,
          }}
          alt="Your avatar"
        />
      </Avatar>
      <YStack position="absolute" bottom={0} left={0} zIndex={2}>
        <Button themeInverse size="$2" borderRadius={9999} icon={<Upload />}></Button>
      </YStack>
    </XStack>
  )
}
