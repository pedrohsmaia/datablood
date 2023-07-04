import { ChevronRight } from '@tamagui/lucide-icons'
import { IconProps } from '@tamagui/helpers-icon'
import React from 'react'
import { useLink } from 'solito/link'
import {
  Button,
  Card,
  CardProps,
  H3,
  H4,
  H5,
  H6,
  Progress,
  SizableText,
  Theme,
  YStack,
} from 'tamagui'

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
    <Card borderRadius="$0" chromeless {...props}>
      <Card.Header my="auto" padded f={1} gap="$2">
        <Icon size={40} opacity={0.6} />
        <YStack>
          {/* <H6 theme="alt2">{subtitle}</H6> */}
          <H4 size="$4" textTransform="capitalize" mt="$2">
            {title}
          </H4>
          <SizableText mt="$1">
            <SizableText size="$4" theme="alt1" fontWeight="900">
              {progress.current.toLocaleString()}
            </SizableText>
            <SizableText size="$2" theme="alt1">
              /{progress.full.toLocaleString()} {progress.label}
            </SizableText>
          </SizableText>

          <Progress
            mt="$2"
            theme="alt2"
            value={(progress.current / progress.full) * 100}
            backgroundColor="$color2"
          >
            <Progress.Indicator backgroundColor="$color7" animation="bouncy" />
          </Progress>

          {!!action && (
            <Button
              mt="$2"
              chromeless
              als="flex-end"
              size="$2"
              iconAfter={<ChevronRight />}
              {...action.props}
            >
              {action.text}
            </Button>
          )}
        </YStack>
      </Card.Header>
    </Card>
  )
}
