import {
  GroupProps,
  H2,
  ScrollView,
  Separator,
  TamaguiComponent,
  XStack,
  YGroup,
  YStack,
  YStackProps,
  isWeb,
  withStaticProperties,
} from '@my/ui'
import { SettingItem } from './setting-item'
import { forwardRef } from 'react'

const Wrapper = forwardRef((props: YStackProps, ref: TamaguiComponent) => (
  <ScrollView>
    <YStack ref={ref} gap="$5" f={1} {...props} />
  </ScrollView>
))

const Items = forwardRef((props: YStackProps, ref: TamaguiComponent) => (
  <YStack
    gap="$4"
    ref={ref}
    {...props}
  />
))

const Group = (props: GroupProps) => (
  <YGroup
    borderRadius={14}
    disablePassBorderRadius={isWeb}
    separator={
      !isWeb && (
        <XStack>
          <YStack width={20} backgroundColor="$color2" />
          <Separator borderColor="$color4" borderWidth="$0.25" />
        </XStack>
      )
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
