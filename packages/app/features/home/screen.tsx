import {
  AchievementCard,
  Banner,
  Button,
  EventCard,
  FeedCard,
  H2,
  H4,
  OverviewCard,
  Paragraph,
  ScrollView,
  Separator,
  Spinner,
  Stack,
  Text,
  Theme,
  TodoCard,
  View,
  XStack,
  YStack,
  isWeb,
  useMedia,
  useToastController,
  validToken,
} from '@my/ui'
import { ArrowRight, DollarSign, Pencil, User, Users } from '@tamagui/lucide-icons'
import ScrollToTopTabBarContainer from 'app/utils/NativeScreenContainer'
import { api } from 'app/utils/api'
import useEventsQuery from 'app/utils/react-query/useEventQuery'
import usePostQuery from 'app/utils/react-query/usePostQuery'
import { useUser } from 'app/utils/useUser'
import type React from 'react'
import { useEffect } from 'react'
import { Platform, PlatformColor } from 'react-native'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const { user } = useUser()
  console.log('homescreen user', user)
  return (
    <XStack maw={1480} als="center" f={1}>
      <ScrollView f={4} fb={0}>
        <ScrollToTopTabBarContainer>
          <Greetings />
          <YStack gap="$7" pb="$10">
            <AchievementsSection />
            <OverviewSection />
            <PostsSection />
          </YStack>
        </ScrollToTopTabBarContainer>
      </ScrollView>

      {isWeb && (
        <>
          <EventCards />
          <Separator vertical />
        </>
      )}
    </XStack>
  )
}

const EventCards = () => {
  const { data, isLoading } = useEventsQuery()

  if (isLoading) return null
  // console.log('data', data)
  return (
    <ScrollView f={1} fb={0} $md={{ dsp: 'none' }}>
      <YStack separator={<Separator />}>
        <YStack>
          {data?.length ? (
            data?.map((event) => (
              <EventCard
                key={event.id}
                title={event.name}
                description={event.description}
                action={{
                  text: 'Show Event',
                  props: {
                    href: `/event/${event.id}`,
                    accessibilityRole: 'link',
                    onPress: () => undefined,
                  },
                }}
                tags={[
                  { text: event.status, theme: 'green_alt2' },
                  {
                    text: `${new Date(event.end_time).toLocaleDateString()} Remaining`,
                    theme: 'blue_alt2',
                  },
                ]}
              />
            ))
          ) : (
            <View h={400} miw="100%" ai="center" jc="center" f={1} background="$gray1">
              <Text>No events yet</Text>
            </View>
          )}
        </YStack>
        <YStack p="$3">
          <Theme name="blue_alt1">
            <Banner cur="pointer">
              <H4>Upgrade Now!</H4>
              <Paragraph size="$2" mt="$1">
                Upgrade to access exclusive features and more!
              </Paragraph>
            </Banner>
          </Theme>
        </YStack>
        <YStack>
          <TodoCard label="Contribute to OSS" checked={false} />
          <TodoCard label="Learn about Tamagui's latest features" checked />
          <TodoCard label="Upgrade to the new Expo version" checked={false} />
          <TodoCard label="Do the dishes" checked={false} />
        </YStack>
      </YStack>
    </ScrollView>
  )
}

const halfMinusSpace = validToken(
  Platform.select({
    web: 'calc(50% - 12px)',
    native: '53%',
  })
)

const quarterMinusSpace = validToken(
  Platform.select({
    web: 'calc(25% - 12px)',
    native: '21%',
  })
)

const AchievementsSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 theme="alt1" fow="400">
          Getting Started
        </H4>
        <Button theme="alt2" size="$2" chromeless iconAfter={ArrowRight}>
          All Achievements
        </Button>
      </XStack>

      <ScrollAdapt>
        <XStack px="$4" fw="wrap" f={1} gap="$3">
          <Theme name="green">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={DollarSign}
              title="Make your first 100K"
              progress={{ current: 81_500, full: 100_000, label: 'dollars made' }}
              action={{
                text: 'Boost your sales',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
          <Theme name="blue">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={User}
              title="Build your community"
              progress={{ current: 280, full: 500, label: 'members' }}
              action={{
                text: 'Boost your community',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
          <Theme name="orange">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={Pencil}
              title="Set up your profile"
              progress={{ current: 2, full: 3, label: 'steps completed' }}
              action={{
                text: 'Continue profile setup',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
          <Theme name="pink">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={Users}
              title="Refer 5 friends"
              progress={{ current: 4, full: 5, label: 'friends referred' }}
              action={{
                text: 'Refer friends',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}

const RightSubheaderButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Theme name="alt2">
      <Button
        size="$3"
        chromeless
        iconAfter={ArrowRight}
        $platform-native={{
          paddingRight: '$2',
          pressStyle: { borderWidth: 0 },
        }}
      >
        {children}
      </Button>
    </Theme>
  )
}

const OverviewSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 theme="alt1" fow="400">
          Overview
        </H4>
        <Theme name="alt2">
          <Button size="$2" chromeless iconAfter={ArrowRight}>
            View All Stats
          </Button>
        </Theme>
      </XStack>

      <ScrollAdapt itemWidth={180} withSnap>
        <XStack fw="wrap" ai="flex-start" jc="flex-start" px="$4" gap="$8" mb="$4">
          <OverviewCard title="MRR" value="$18,908" badgeText="+0.5%" badgeState="success" />

          <OverviewCard title="ARR" value="$204,010" badgeText="+40.5%" badgeState="success" />

          <OverviewCard
            title="Today's new users"
            value="4 Users"
            badgeText="+25%"
            badgeState="success"
          />

          <OverviewCard
            title="Weekly Post Views"
            value="30,104"
            badgeText="-2%"
            badgeState="failure"
          />
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}

const feedCardWidthMd = validToken(
  Platform.select({
    web: 'calc(33.33% - 12px)',
    native: '32%',
  })
)

const PostsSection = () => {
  const { data, isLoading, isError } = usePostQuery()
  console.log('data', data, isLoading, isError)
  if (isLoading) return null
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

function ScrollAdapt({
  children,
  withSnap = false,
  itemWidth,
}: {
  children: React.ReactNode
  withSnap?: boolean
  itemWidth?: number
}) {
  const { md } = useMedia()
  return md ? (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      {...(itemWidth && { snapToInterval: itemWidth })}
      snapToAlignment="start"
      {...(withSnap && { decelerationRate: 0.9 })}
    >
      {children}
    </ScrollView>
  ) : (
    <ScrollView horizontal>{children}</ScrollView>
  )
}

const Greetings = () => {
  const { data, isLoading, isError } = api.greeting.greet.useQuery()
  const toast = useToastController()
  const isNative = Platform.OS === 'ios' || Platform.OS === 'android'
  useEffect(() => {
    data &&
      toast.show('tRPC server connected.', {
        native: isNative,
        duration: 2000,
        burntOptions: {
          from: 'top',
          preset: 'done',
        },
      })
    isError &&
      toast.show(`Error connecting to tPRC server.`, {
        native: isNative,
        burntOptions: {
          preset: 'error',
          shouldDismissByDrag: true,
          from: 'bottom',
        },
      })
  }, [data, isError, toast])
  return (
    <H2 m="$4">
      {isLoading ? <Spinner /> : null}
      {data ? data : null}
    </H2>
  )
}
