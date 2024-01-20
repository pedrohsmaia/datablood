import { ChevronRight } from '@tamagui/lucide-icons'
import { ListItem, SizableText, YGroup, YStack } from 'tamagui'

import { SettingItemProps } from './SettingItem'

export const SettingItem = ({
  icon: Icon,
  children,
  accentColor,
  rightLabel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isActive: _, // not used on native - destructuring to avoid passing it through props
  ...props
}: SettingItemProps) => {
  return (
    <YGroup.Item>
      <ListItem cursor="pointer" gap="$4" hoverTheme pressTheme {...props}>
        <YStack bg={accentColor} p="$2" br="$3">
          <Icon color="white" size={18} />
        </YStack>
        <SizableText col="$color" fos={18} f={1}>
          {children}
        </SizableText>
        {rightLabel ? (
          <SizableText col="$color11" tt="capitalize">
            {rightLabel}
          </SizableText>
        ) : (
          <ChevronRight size={20} color="$color9" />
        )}
      </ListItem>
    </YGroup.Item>
  )
}
