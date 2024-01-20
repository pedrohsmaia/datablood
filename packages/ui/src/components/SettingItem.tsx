import { IconProps } from '@tamagui/helpers-icon'
import { ListItem, ListItemProps, SizableText, XStack, YGroup, YStack } from 'tamagui'

export type SettingItemProps = {
  icon: React.FC<IconProps>
  rightLabel?: string
  /**
   * native only - not showing colors on native
   */
  accentColor?: ListItemProps['bg']
  /**
   * web only - to indicate the current page
   */
  isActive?: boolean
} & ListItemProps

export const SettingItem = ({
  icon: Icon,
  children,
  rightLabel,
  isActive,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  accentColor: _, // not used on web - destructuring to avoid passing it through props
  ...props
}: SettingItemProps) => {
  return (
    <YGroup.Item>
      <ListItem
        hoverTheme
        cur="pointer"
        gap="$2"
        br="$10"
        bg={isActive ? '$backgroundFocus' : 'transparent'}
        {...props}
      >
        <YStack p="$2" br="$3">
          <Icon opacity={0.6} size={18} />
        </YStack>
        <SizableText f={1}>{children}</SizableText>
        {!!rightLabel && (
          <XStack br="$10" bg="$backgroundPress" px="$3" py="$1.5">
            <SizableText size="$1" tt="capitalize">
              {rightLabel}
            </SizableText>
          </XStack>
        )}
      </ListItem>
    </YGroup.Item>
  )
}
