import { ArrowUpRight } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { Button, Card, CardProps, H6, Paragraph } from 'tamagui'

export type EventCardTypes = {
  title?: string
  description?: string
  action?: {
    props: ReturnType<typeof useLink>
    text: string
  }
} & CardProps

export const EventCard = ({ title, description, action, ...props }: EventCardTypes) => {
  return (
    <Card gap="$2" padded borderRadius="$0" chromeless {...props}>
      <H6 size="$1" textTransform='capitalize'>{title}</H6>
      <Paragraph>{description}</Paragraph>

      {action && (
        <Button iconAfter={ArrowUpRight} size="$2" als="flex-end" {...action.props}>
          {action?.text}
        </Button>
      )}
    </Card>
  )
}
