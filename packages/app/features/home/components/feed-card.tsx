import { Avatar, Card, CardProps, H4, H6, Paragraph, Tooltip, TooltipSimple, XStack } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import React from 'react'

// mostly for showing something on home so it's not empty
export const FeedCard = ({
  title,
  description,
  tag,
  authors,
  ...props
}: {
  title: string
  description?: string
  tag?: string
  authors?: { avatar: string; name: string; id: number }[]
} & CardProps) => {
  return (
    <Card
      // shadowColor="#00000015"
      // shadowRadius={2}
      // shadowOffset={{
      //   height: 2,
      //   width: 0,
      // }}

      // backgroundColor="red"
      borderRadius="$8"
      // overflow="visible"
      // elevationAndroid="$1"
      f={1}
      {...props}
    >
      <Card.Header padded gap="$2">
        <H4>{title}</H4>

        {!!description && <Paragraph theme="alt1">{description}</Paragraph>}
        {!!tag && <H6 theme="alt2">{tag}</H6>}
      </Card.Header>

      {!!(authors && authors.length > 0) && (
        <Card.Footer padded>
          <XStack>
            {authors.map((author) => (
              <TooltipSimple key={author.id} label={author.name}>
                <Avatar circular size={32} mr="$-2">
                  <Avatar.Image
                    source={{
                      uri: author.avatar,
                      width: 32,
                      height: 32,
                    }}
                  />
                </Avatar>
              </TooltipSimple>
            ))}
          </XStack>
        </Card.Footer>
      )}

      <Card.Background>
        <LinearGradient
          borderRadius="$8"
          width="100%"
          height="100%"
          colors={['$color6', '$color7']}
          start={[1, 1]}
          end={[0.85, 0]}
        />
      </Card.Background>
    </Card>
  )
}
