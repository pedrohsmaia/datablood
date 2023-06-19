import {
  AchievementCard,
  FeedCard,
  H3,
  H4,
  OverviewCard,
  ScrollView,
  Theme,
  XStack,
  YStack,
} from '@my/ui'
import { DollarSign, Edit2, User, Users } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'

const defaultAuthors = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=67/32/32?ca=1',
  },
  {
    id: 2,
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=30/32/32?ca=1',
  },
]

function getTimeOfDay() {
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 4) {
    return 'night'
  } else if (curHr < 12) {
    return 'morning'
  } else if (curHr < 18) {
    return 'afternoon'
  } else {
    return 'night'
  }
}

export function HomeScreen() {
  const { profile } = useUser()

  return (
    <ScrollView>
      <YStack gap="$8" pt="$4" pb="$8">
        <YStack px="$4" mt="$4" gap="$2">
          <H3>
            Good {getTimeOfDay()}
            {profile?.name ? `, ${profile?.name}!` : '!'}
          </H3>
        </YStack>
        <YStack gap="$8">
          <OverviewSection />
          <PostsSection />
          <AchievementsSection />
        </YStack>
      </YStack>
    </ScrollView>
  )
}

const AchievementsSection = () => {
  return (
    <YStack gap="$4">
      <XStack px="$4" ai="center" gap="$2">
        <H4>Achievements</H4>
      </XStack>

      <XStack
        px="$4"
        flexWrap="wrap"
        flex={1}
        gap="$2"
        jc="space-evenly"
        // $gtLg={{ jc: 'flex-start' }}
      >
        <AchievementCard
          icon={DollarSign}
          $sm={{ width: '100%' }}
          $gtSm={{ width: '40%' }}
          $gtLg={{ width: '24%' }}
          title="Make your first 100K"
          progress={{ current: 81_500, full: 100_000, label: 'dollars made' }}
          action={{
            text: 'Boost your sales',
            props: useLink({ href: '#' }),
          }}
        />
        <AchievementCard
          icon={User}
          $sm={{ width: '100%' }}
          $gtSm={{ width: '42%' }}
          $gtLg={{ width: '24%' }}
          title="Build your community"
          progress={{ current: 280, full: 500, label: 'community members' }}
          action={{
            text: 'Boost your community',
            props: useLink({ href: '#' }),
          }}
        />
        <AchievementCard
          icon={Edit2}
          $sm={{ width: '100%' }}
          $gtSm={{ width: '40%' }}
          $gtLg={{ width: '24%' }}
          title="Set up your profile"
          progress={{ current: 3, full: 3, label: 'steps completed' }}
          action={{
            text: 'Continue profile setup',
            props: useLink({ href: '#' }),
          }}
        />
        <AchievementCard
          icon={Users}
          $sm={{ width: '100%' }}
          $gtSm={{ width: '40%' }}
          $gtLg={{ width: '24%' }}
          title="Refer 5 friends"
          progress={{ current: 4, full: 5, label: 'friends referred' }}
          action={{
            text: 'Refer friends',
            props: useLink({ href: '#' }),
          }}
        />
      </XStack>
    </YStack>
  )
}

const OverviewSection = () => {
  return (
    <YStack gap="$4">
      <XStack px="$4" ai="center" gap="$2">
        <H4>Overview</H4>
      </XStack>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack px="$4" gap="$4" mb="$4">
          <OverviewCard
            $gtSm={{ width: 300 }}
            $gtMd={{ width: 240 }}
            $sm={{ width: 200 }}
            title="Weekly Recurring Revenue"
            value="$18,908"
            badgeText="+0.5%"
            badgeState="success"
          />

          <OverviewCard
            $gtSm={{ width: 300 }}
            $gtMd={{ width: 240 }}
            $sm={{ width: 200 }}
            title="Yearly Recurring Revenue"
            value="$204,010"
            badgeText="+40.5%"
            badgeState="success"
          />

          <OverviewCard
            $gtSm={{ width: 300 }}
            $gtMd={{ width: 240 }}
            $sm={{ width: 200 }}
            title="Today's new users"
            value="4 Users"
            badgeText="+25%"
            badgeState="success"
          />

          <OverviewCard
            $gtSm={{ width: 300 }}
            $gtMd={{ width: 240 }}
            $sm={{ width: 200 }}
            title="This week's new users"
            value="14 Users"
            badgeText="-2%"
            badgeState="failure"
          />

          <OverviewCard
            $gtSm={{ width: 300 }}
            $gtMd={{ width: 240 }}
            $sm={{ width: 200 }}
            title="Weekly Post Views"
            value="30,104"
            badgeText="-2%"
            badgeState="failure"
          />

          <OverviewCard
            $gtSm={{ width: 300 }}
            $gtMd={{ width: 240 }}
            $sm={{ width: 200 }}
            title="Monthly Post Views"
            value="150,104"
            badgeText="+1%"
            badgeState="success"
          />
        </XStack>
      </ScrollView>
    </YStack>
  )
}

const PostsSection = () => {
  return (
    <YStack gap="$4">
      <H4 px="$4">Latest Posts</H4>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack px="$4" gap="$4" mb="$4">
          
            <FeedCard
              withImages
              $sm={{ width: 300 }}
              $gtSm={{ width: 400 }}
              // $gtLg={{ width: 400 }}
              title="Why lorem ipsum look bad"
              description="Maybe it's just me - I'll just write out some dummy text just ignore the text tyvm..."
              tag="Design"
              authors={defaultAuthors}
            />
          
            <FeedCard
              withImages
              $sm={{ width: 300 }}
              $gtSm={{ width: 400 }}
              // $gtLg={{ width: 400 }}
              title="Why you should use Tamagui"
              description="Tamagui is the best way to develop performant cross-platform apps with one codebase..."
              tag="React"
              authors={defaultAuthors}
            />
          
            <FeedCard
              withImages
              $sm={{ width: 300 }}
              $gtSm={{ width: 400 }}
              // $gtLg={{ width: 400 }}
              title="Merits of functional programming"
              description="What is FP anyways? let's talk about it and learn about it's pros and cons..."
              tag="Programming"
              authors={defaultAuthors}
            />
          
            <FeedCard
              withImages
              $sm={{ width: 300 }}
              $gtSm={{ width: 400 }}
              // $gtLg={{ width: 400 }}
              title="Different React paradigms"
              description="We're gonna talk about different react paradigm and jargons..."
              tag="React"
              authors={defaultAuthors}
            />
        </XStack>
      </ScrollView>
    </YStack>
  )
}
