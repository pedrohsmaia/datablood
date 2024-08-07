import {
  Button,
  FeedCard,
  FullscreenSpinner,
  H4,
  Stack,
  Text,
  Theme,
  View,
  XStack,
  isWeb,
  useToastController,
  validToken,
} from '@my/ui'
import { ArrowRight } from '@tamagui/lucide-icons'
import usePostQuery from 'app/utils/react-query/usePostQuery'
import { useEffect } from 'react'
import { Platform } from 'react-native'

const feedCardWidthMd = validToken(
  Platform.select({
    web: 'calc(33.33% - 12px)',
    native: '32%',
  })
)

export const PostsSection = () => {
  const { data, isLoading, isError } = usePostQuery()
  const toast = useToastController()
  useEffect(() => {
    isError && toast.show('Error loading posts.')
  }, [data, isLoading, isError])
  if (isLoading) return <FullscreenSpinner />
  return (
    <View>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 theme="alt1" fow="400">
          Latest Posts
        </H4>
        <Theme name="alt2">
          <Button size="$2" chromeless iconAfter={ArrowRight}>
            View All Posts
          </Button>
        </Theme>
      </XStack>
      <Stack
        maxWidth={1070}
        gap="1%"
        $platform-native={{ mb: '$0', ml: '$1', mr: '$2.5' }}
        jc="flex-start"
        fw="wrap"
        flexDirection={isWeb ? 'row' : 'column'}
      >
        {data?.length ? (
          data.map((card, index) => (
            <FeedCard
              imageUrl={card.image_url}
              key={`${card.title}-${index}`}
              withImages
              mb="$3"
              $gtMd={{ w: feedCardWidthMd, mb: '1%', miw: '32.333%' }}
              title={card.title}
              description={`${card?.content?.substring(0, 150)}...`}
              tag={card.tag}
              authors={card.authors}
              $platform-web={{ maxWidth: 300 }}
              $platform-native={{ minWidth: '100%', maxWidth: '100%' }}
            />
          ))
        ) : (
          <View mx="$4" $gtSm={{ miw: '100%', mb: '$4' }}>
            <View
              height={200}
              maw="100%"
              miw="100%"
              ai="center"
              jc="center"
              f={1}
              backgroundColor="$gray1"
              m="$2"
              $platform-native={{ m: '$0', mb: '$3' }}
              ml="$0"
              br="$5"
            >
              <Text>No posts created yet</Text>
            </View>
          </View>
        )}
      </Stack>
    </View>
  )
}
