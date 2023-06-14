import { CardProps, Card, H6, H2, Paragraph, Button, XStack } from '@my/ui'

export type OverviewCardTypes = {
  title: string
  value: string
  badgeText?: string
  badgeAfter?: string
  badgeState?: 'success' | 'failure' | 'indifferent'
} & CardProps

export const OverviewCard = ({
  title,
  value,
  badgeText,
  badgeState,
  badgeAfter,
  ...props
}: OverviewCardTypes) => {
  return (
    <Card borderRadius={0} backgroundColor="transparent" {...props}>
      <Card.Header>
        <H6 theme="alt2">{title}</H6>
        <H2 mt="$2">{value}</H2>
        <XStack mt="$4">
          {!!badgeText && (
            <Button
              size="$3"
              disabled
              theme={
                badgeState === 'success' ? 'green' : badgeState === 'failure' ? 'red' : undefined
              }
            >
              {badgeText}
            </Button>
          )}
          {badgeAfter && <Paragraph>{badgeAfter}</Paragraph>}
        </XStack>
      </Card.Header>
    </Card>
  )
}
