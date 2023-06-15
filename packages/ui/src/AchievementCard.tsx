import { ChevronRight } from '@tamagui/lucide-icons'
import { IconProps } from '@tamagui/lucide-icons/types/IconProps'
import React from 'react'
import { useLink } from 'solito/link'
import { Button, Card, CardProps, H3, H5, Progress, SizableText, YStack } from 'tamagui'

export type AchievementCardTypes = {
  icon: React.FC<IconProps>
  title?: string
  subtitle?: string
  progress: {
    current: number
    full: number
    label?: string
  }
  action?: {
    props: ReturnType<typeof useLink>
    text: string
  }
} & CardProps

export const AchievementCard = ({
  title,
  subtitle,
  icon: Icon,
  progress,
  action,
  ...props
}: AchievementCardTypes) => {
  return (
    <Card borderRadius={0} chromeless {...props}>
      <Card.Header my="auto" padded f={1}>
        <YStack>
          <Icon size={64} />
        </YStack>
        <YStack>
          <H5 theme="alt2">{subtitle}</H5>
          <H3 mt="$2">{title}</H3>
          <SizableText mt="$4">
            <SizableText>{progress.current.toLocaleString()}</SizableText>
            <SizableText theme="alt2">
              /{progress.full.toLocaleString()} {progress.label}
            </SizableText>
          </SizableText>
          <Progress mt="$2" theme="alt2" value={(progress.current / progress.full) * 100}>
            <Progress.Indicator animation="bouncy" />
          </Progress>
          {!!action && (
            <Button
              mt="$2"
              chromeless
              als="flex-end"
              size="$4"
              {...action.props}
              iconAfter={<ChevronRight />}
            >
              {action.text}
            </Button>
          )}
        </YStack>
      </Card.Header>
    </Card>
  )
}
