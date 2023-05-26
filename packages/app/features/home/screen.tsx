import { H2, H3, H4, Paragraph, ScrollView, Theme, XStack, YStack } from '@my/ui'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { FeedCard } from './components/feed-card'

export function HomeScreen() {
  const { profile } = useUser()

  return (
    <ScrollView>
      <YStack gap="$8" pb="$8">
        <YStack px="$4" mt="$4">
          <H2>{profile?.name ? `Welcome, ${profile?.name}!` : 'Welcome!'}</H2>
          <Paragraph>Let's explore the app</Paragraph>
        </YStack>
        <YStack gap="$8">
          <YStack gap="$4">
            <H3 px="$4">Your Feed</H3>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <XStack px="$4" gap="$4" mb="$4">
                <Theme name="orange">
                  <FeedCard
                    showAvatars
                    title="Est duis anim ullamco"
                    description="Nostrud officia pariatur commodo adipisicing cillum qui commodo voluptate ea laborum tempor."
                    tag="Javascript"
                    width={300}
                  />
                </Theme>
                <Theme name="green">
                  <FeedCard
                    showAvatars
                    title="Esse commodo sunt dolore nisi"
                    description="Voluptate aliquip in sit Lorem sunt dolore sint."
                    tag="Javascript"
                    width={300}
                  />
                </Theme>
                <Theme name="purple">
                  <FeedCard
                    showAvatars
                    title="Lorem consectetur non magna"
                    description="Culpa pariatur Lorem exercitation dolore magna dolor esse laboris culpa sint exercitation elit culpa laboris."
                    tag="Javascript"
                    width={300}
                  />
                </Theme>
              </XStack>
            </ScrollView>
          </YStack>

          <YStack gap="$4" px="$4">
            <H4>🔥 Hot</H4>
            <YStack
              $gtSm={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                flex: 1,
              }}
              gap="$4"
            >
              <Theme name="blue">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Nostrud officia veniam "
                  tag="Javascript"
                />
              </Theme>
              <Theme name="pink">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Id ullamco proident lorem"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="yellow">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Sint amet ea exercitation"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="green">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Proident labore laborum"
                  tag="Javascript"
                />
              </Theme>
            </YStack>
          </YStack>

          <YStack gap="$4" px="$4">
            <H4>🆕 Recent</H4>
            <YStack
              $gtSm={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                flex: 1,
              }}
              gap="$4"
            >
              <Theme name="red">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Aliqua do eiusmod eu voluptate"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="gray">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Officia mollit proident"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="orange">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Enim sit dolor id elit in"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="purple">
                <FeedCard
                  $gtSm={{ width: '40%' }}
                  title="Consequat id adipisicing officia"
                  tag="Javascript"
                />
              </Theme>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </ScrollView>
  )
}
