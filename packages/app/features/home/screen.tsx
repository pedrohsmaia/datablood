import {
  Avatar,
  Card,
  CardProps,
  H2,
  H3,
  H4,
  H6,
  Paragraph,
  ScrollView,
  Theme,
  XStack,
  YStack,
} from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { useUser } from 'app/utils/useUser'
import React from 'react'

export function HomeScreen() {
  const { profile } = useUser()

  return (
    <ScrollView>
      <YStack gap="$8" pb="$8">
        <YStack px="$true" mt="$true">
          <H2>{profile?.name ? `Welcome, ${profile?.name}!` : 'Welcome!'}</H2>
        </YStack>

        <YStack gap="$true">
          <H3 px="$true">Posts</H3>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <XStack px="$true" gap="$true" mb="$true">
              <Theme name="orange">
                <PostCardBig
                  showAvatars
                  title="Est duis anim ullamco magna"
                  description="Nostrud officia pariatur commodo adipisicing cillum qui commodo voluptate ea laborum tempor."
                  tag="Javascript"
                  width={350}
                />
              </Theme>
              <Theme name="green">
                <PostCardBig
                  showAvatars
                  title="Esse commodo sunt dolore nisi"
                  description="Voluptate aliquip in sit Lorem sunt dolore sint."
                  tag="Javascript"
                  width={350}
                />
              </Theme>
              <Theme name="purple">
                <PostCardBig
                  showAvatars
                  title="Lorem consectetur non magna"
                  description="Culpa pariatur Lorem exercitation dolore magna dolor esse laboris culpa sint exercitation elit culpa laboris."
                  tag="Javascript"
                  width={350}
                />
              </Theme>
            </XStack>
          </ScrollView>

          <YStack gap="$true" px="$true">
            <H4>Recent</H4>
            <YStack
              $gtMd={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                flex: 1,
              }}
              gap="$true"
            >
              <Theme name="blue">
                <PostCardBig
                  $gtMd={{
                    width: 300,
                  }}
                  title="Aliqua do eiusmod eu voluptate"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="pink">
                <PostCardBig
                  $gtMd={{
                    width: 300,
                  }}
                  title="Officia mollit proident"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="yellow">
                <PostCardBig
                  $gtMd={{
                    width: 300,
                  }}
                  title="Enim sit elit in"
                  tag="Javascript"
                />
              </Theme>
              <Theme name="green">
                <PostCardBig
                  $gtMd={{
                    width: 300,
                  }}
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

// not a postcard, but a post card
const PostCardBig = ({
  title,
  description,
  tag,
  showAvatars,
  ...props
}: {
  title: string
  description?: string
  tag?: string
  showAvatars?: boolean
} & CardProps) => {
  return (
    <Card elevate borderRadius="$8" {...props}>
      <Card.Header padded>
        <H4>{title}</H4>

        {!!description && <Paragraph theme="alt1">{description}</Paragraph>}
        {!!tag && <H6 theme="alt2">{tag}</H6>}
      </Card.Header>

      {showAvatars && (
        <Card.Footer padded>
          <XStack>
            <Avatar circular size={32} mr="$-2">
              <Avatar.Image
                source={{ uri: 'https://placekitten.com/32/32?ca=1', width: 32, height: 32 }}
              />
            </Avatar>
            <Avatar circular size={32} mr="$-2">
              <Avatar.Image
                source={{ uri: 'https://placekitten.com/33/33?ca=2', width: 32, height: 32 }}
              />
            </Avatar>
            <Avatar circular size={32} mr="$-2">
              <Avatar.Image
                source={{ uri: 'https://placekitten.com/34/34?ca=3', width: 32, height: 32 }}
              />
            </Avatar>
          </XStack>
        </Card.Footer>
      )}

      <Card.Background>
        <LinearGradient
          width="100%"
          height="100%"
          colors={['$color7', '$color3']}
          start={[1, 1]}
          end={[0.85, 0]}
        />
      </Card.Background>
    </Card>
  )
}
