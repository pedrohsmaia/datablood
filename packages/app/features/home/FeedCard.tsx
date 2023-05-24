import { Avatar, Card, CardProps, H4, H6, Paragraph, XStack } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import React from 'react'

// mostly for showing something on home so it's not empty
export const FeedCard = ({
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
    <Card
      shadowColor="#00000015"
      shadowRadius={2}
      shadowOffset={{
        height: 2,
        width: 0,
      }}
      borderRadius="$8"
      overflow="visible"
      elevationAndroid="$1"
      f={1}
      {...props}
    >
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
          borderRadius="$8"
          width="100%"
          height="100%"
          colors={['$color3', '$color5']}
          start={[1, 1]}
          end={[0.85, 0]}
        />
      </Card.Background>
    </Card>
  )
}
