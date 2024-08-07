import {
  Banner,
  EventCard,
  H4,
  Paragraph,
  ScrollView,
  Separator,
  Text,
  Theme,
  TodoCard,
  View,
  XStack,
  YStack,
  isWeb,
} from '@my/ui'
import ScrollToTopTabBarContainer from 'app/utils/NativeScreenContainer'
import useEventsQuery from 'app/utils/react-query/useEventQuery'

import { AchievementsSection } from './components/achievements-section'
import { Greetings } from './components/greetings'
import { OverviewSection } from './components/overview-section'
import { PostsSection } from './components/posts-section'

export function HomeScreen() {
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
