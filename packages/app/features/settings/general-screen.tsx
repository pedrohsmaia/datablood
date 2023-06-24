import {
  FormWrapper,
  H2,
  H4,
  KVTable,
  SizableText,
  YStack,
  isWeb,
  useToastController,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'

export const GeneralSettingsScreen = () => {
  const { user, profile } = useUser()

  return (
    <FormWrapper>
      {isWeb && (
        <YStack px="$4" py="$4" pb="$2">
          <H2>General</H2>
        </YStack>
      )}
      <FormWrapper.Body mt="$2" gap="$10">
        <KVTable>
          <H4>Profile Data</H4>
          <KVTable.Row>
            <KVTable.Key>
              <SizableText fontWeight="900">Name</SizableText>
            </KVTable.Key>
            <KVTable.Value gap="$4">
              <SizableText>{profile?.name}</SizableText>
              <Link href="/profile/edit">
                <SizableText textDecorationLine="underline">Change</SizableText>
              </Link>
            </KVTable.Value>
          </KVTable.Row>
        </KVTable>

        <KVTable>
          <H4>Account Data</H4>

          <KVTable.Row>
            <KVTable.Key>
              <SizableText fontWeight="900">Email</SizableText>
            </KVTable.Key>
            <KVTable.Value gap="$4">
              <SizableText>{user?.email}</SizableText>
              <Link href="/settings/change-email">
                <SizableText textDecorationLine="underline">Change</SizableText>
              </Link>
            </KVTable.Value>
          </KVTable.Row>

          <KVTable.Row>
            <KVTable.Key>
              <SizableText fontWeight="900">User ID</SizableText>
            </KVTable.Key>
            <KVTable.Value>
              <SizableText>{user?.id}</SizableText>
            </KVTable.Value>
          </KVTable.Row>
        </KVTable>
      </FormWrapper.Body>
    </FormWrapper>
  )
}
