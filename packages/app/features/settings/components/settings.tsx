import {
  GroupProps,
  H2,
  Separator,
  XStack,
  YGroup,
  YStack,
  isWeb,
  withStaticProperties,
} from '@my/ui'
import { SettingItem } from './item'

const Wrapper = YStack.styleable((props, ref) => <YStack ref={ref} gap="$5" f={1} {...props} />)

const Items = YStack.styleable((props, ref) => (
  <YStack
    gap={isWeb ? undefined : '$4'}
    separator={isWeb && <Separator borderColor="$color4" borderWidth="$0.25" />}
    ref={ref}
    {...props}
  />
))

const Group = (props: GroupProps) => (
  <YGroup
    borderRadius={14}
    disablePassBorderRadius={isWeb}
    separator={
      <XStack>
        {!isWeb && <YStack width={20} backgroundColor="$color2" />}
        <Separator borderColor="$color4" borderWidth="$0.25" />
      </XStack>
    }
    {...props}
  />
)

const Title = H2.styleable((props, ref) => (
  <H2 mx={isWeb ? '$6' : '$4'} py="$4" ref={ref} {...props} />
))

export const Settings = withStaticProperties(Wrapper, {
  Item: SettingItem,
  Items,
  Group,
  Title,
})
