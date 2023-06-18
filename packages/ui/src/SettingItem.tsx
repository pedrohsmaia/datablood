import { ListItem, ListItemProps, SizableText, XStack, YGroup, YStack } from 'tamagui'
import { IconProps } from '@tamagui/helpers-icon'
import { LinkProps, useLink } from 'solito/link'

export type SettingItemProps = {
  icon: React.FC<IconProps>
  rightLabel?: string
  accentColor?: ListItemProps['backgroundColor']
} & Omit<ListItemProps, 'href'> &
  Partial<LinkProps>

export const SettingItem = ({
  href,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  icon: Icon,
  children,
  accentColor,
  rightLabel,
  ...props
}: SettingItemProps) => {
  const linkProps = { href, replace, scroll, shallow, prefetch, locale }

  return (
    <YGroup.Item>
      <ListItem
        hoverTheme
        cursor="pointer"
        px="$4"
        gap="$2"
        {...(typeof href !== 'undefined' ? useLink({ ...linkProps, href }) : {})}
        {...props}
      >
        <YStack padding="$2" borderRadius="$3">
          <Icon opacity={0.6} size={18} />
        </YStack>
        <SizableText flex={1}>{children}</SizableText>
        {!!rightLabel && (
          <XStack borderRadius={100} backgroundColor="$color5" px="$3" py="$1.5">
            <SizableText size="$1" textTransform="capitalize">
              {rightLabel}
            </SizableText>
          </XStack>
        )}
      </ListItem>
    </YGroup.Item>
  )
}
