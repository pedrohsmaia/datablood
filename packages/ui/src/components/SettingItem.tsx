import { IconProps } from '@tamagui/helpers-icon'
import { SizableText, XStack, YGroup, YStack, YStackProps, styled } from 'tamagui'

export type SettingItemProps = YStackProps & {
  icon: React.FC<IconProps>
  rightLabel?: string
  /**
   * native only - not showing colors on native
   */
  accentColor?: YStackProps['bg']
  /**
   * web only - to indicate the current page
   */
  isActive?: boolean
}

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
      <SettingItemFrame isActive={!!isActive} {...props}>
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
      </SettingItemFrame>
    </YGroup.Item>
  )
}

const SettingItemFrame = styled(XStack, {
  bg: '$color1',
  ai: 'center',
  jc: 'center',
  p: '$2.5',
  cur: 'pointer',
  gap: '$2',
  br: '$10',

  variants: {
    isActive: {
      true: {
        bg: '$backgroundFocus',
      },
      false: {
        hoverStyle: {
          bg: '$backgroundHover',
        },
      },
    },
  } as const,
})
