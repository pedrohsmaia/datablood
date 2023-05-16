import { ListItem, ListItemProps, SizableText, YGroup, YStack } from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { IconProps } from '@tamagui/lucide-icons/types/IconProps'
import { LinkProps, useLink } from 'solito/link'

export type SettingItemProps = {
  icon: React.FC<IconProps>
  rightSide?: JSX.Element
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
  rightSide,
  ...props
}: SettingItemProps) => {
  const linkProps = { href, replace, scroll, shallow, prefetch, locale }

  return (
    <YGroup.Item>
      <ListItem
        cursor="pointer"
        gap="$4"
        hoverTheme
        pressTheme
        {...(typeof href !== 'undefined' ? useLink({ ...linkProps, href }) : {})}
        {...props}
      >
        <YStack backgroundColor={accentColor} padding="$2" borderRadius="$3">
          <Icon color="white" size={18} />
        </YStack>
        <SizableText flex={1}>{children}</SizableText>
        {rightSide ?? <ChevronRight size={32} color="$color9" />}
      </ListItem>
    </YGroup.Item>
  )
}
