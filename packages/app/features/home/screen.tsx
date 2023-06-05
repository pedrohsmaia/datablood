import { H2, H3, H4, Paragraph, ScrollView, Theme, XStack, YStack } from '@my/ui'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { FeedCard } from './components/feed-card'
import { Newspaper, Star } from '@tamagui/lucide-icons'

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

export function HomeScreen() {
  const { profile } = useUser()

  return (
    <ScrollView>
      <YStack gap="$8" pb="$8">
        <YStack px="$4" mt="$4" gap="$2">
          <H2>{profile?.name ? `Welcome, ${profile?.name}!` : 'Welcome!'}</H2>
          <Paragraph size="$5">Let's explore the app...</Paragraph>
        </YStack>
        <YStack gap="$8">
          <YStack gap="$4">
            <H3 px="$4">Your Feed</H3>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <XStack px="$4" gap="$4" mb="$4">
                <Theme name="blue">
                  <FeedCard
                    title="Est duis anim ullamco"
                    authors={defaultAuthors}
                    description="Nostrud officia pariatur commodo adipisicing cillum qui commodo voluptate ea laborum tempor."
                    tag="Javascript"
                    width={300}
                  />
                </Theme>
                <Theme name="yellow">
                  <FeedCard
                    title="Esse commodo sunt dolore nisi"
                    authors={defaultAuthors}
                    description="Voluptate aliquip in sit Lorem sunt dolore sint."
                    tag="Technology"
                    width={300}
                  />
                </Theme>
                <Theme name="red">
                  <FeedCard
                    title="Lorem consectetur non magna"
                    authors={defaultAuthors}
                    description="Culpa pariatur Lorem exercitation dolore magna dolor esse laboris culpa sint exercitation elit culpa laboris."
                    tag="Web"
                    width={300}
                  />
                </Theme>
                <Theme name="pink">
                  <FeedCard
                    title="Occaecat esse aliquip aliquip"
                    authors={defaultAuthors}
                    description="Do in nisi qui tempor culpa Lorem cupidatat exercitation Lorem ipsum do."
                    tag="Javascript"
                    width={300}
                  />
                </Theme>
                <Theme name="orange">
                  <FeedCard
                    title="Proident cupidatat pariatur dolor"
                    authors={defaultAuthors}
                    description="Aliquip sunt commodo veniam sint sint anim aliquip esse duis adipisicing."
                    tag="Tamagui"
                    width={300}
                  />
                </Theme>
              </XStack>
            </ScrollView>
          </YStack>

          <YStack gap="$4" px="$4">
            <XStack ai="center" gap="$2">
              <Star size={20} />
              <H4>Featured</H4>
            </XStack>

            <YStack
              $gtSm={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                flex: 1,
              }}
              gap="$4"
            >
              <Theme name="green">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Nostrud officia veniam"
                  description="Quis velit sunt eiusmod excepteur ex Lorem veniam quis"
                  tag="Javascript"
                  authors={defaultAuthors}
                />
              </Theme>
              <Theme name="green">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Id ullamco proident lorem"
                  description="Incididunt reprehenderit eiusmod officia eu esse"
                  tag="Backend Development"
                  authors={defaultAuthors}
                />
              </Theme>
              <Theme name="green">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Sint amet ea exercitation"
                  description="Ea ipsum incididunt cupidatat id anim"
                  tag="Node.js"
                  authors={defaultAuthors}
                />
              </Theme>
              <Theme name="green">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Proident labore laborum"
                  description="Laborum id veniam quis esse consectetur nulla"
                  tag="Javascript"
                  authors={defaultAuthors}
                />
              </Theme>
            </YStack>
          </YStack>

          <YStack gap="$4" px="$4">
            <XStack ai="center" gap="$2">
              <Newspaper size={20} />
              <H4>News</H4>
            </XStack>

            <YStack
              $gtSm={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                flex: 1,
              }}
              gap="$4"
            >
              <Theme name="purple">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Aliqua do eiusmod eu voluptate"
                  description="Minim dolore eu fugiat ullamco"
                  tag="Supabase"
                  authors={defaultAuthors}
                />
              </Theme>
              <Theme name="purple">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Officia mollit proident"
                  description="Magna sit enim ullamco occaecat"
                  tag="Type-Safety"
                  authors={defaultAuthors}
                />
              </Theme>
              <Theme name="purple">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Enim sit dolor id elit in"
                  description="Reprehenderit ex duis incididunt non"
                  tag="Typescript"
                  authors={defaultAuthors}
                />
              </Theme>
              <Theme name="purple">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  $gtLg={{ width: '20%' }}
                  title="Consequat id adipisicing officia"
                  description="Irure sint dolor proident tempor"
                  tag="Javascript"
                  authors={defaultAuthors}
                />
              </Theme>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </ScrollView>
  )
}
