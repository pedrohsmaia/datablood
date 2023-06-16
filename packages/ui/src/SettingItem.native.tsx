import { ListItem, SizableText, YGroup, YStack } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { SettingItemProps } from './SettingItem'

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
        <SizableText color="$color" fontSize={18} flex={1}>
          {children}
        </SizableText>
        {!!rightLabel ? (
          <SizableText color="$color11" textTransform="capitalize">
            {rightLabel}
          </SizableText>
        ) : (
          <ChevronRight size={20} color="$color9" />
        )}
      </ListItem>
    </YGroup.Item>
  )
}
