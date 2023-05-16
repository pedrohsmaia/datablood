import { Separator, XStack, YGroup, YStack } from '@my/ui'

export type SettingGroupProps = { children: React.ReactNode }
export const SettingGroup = ({ children }: SettingGroupProps) => {
  return (
    <YGroup
      borderRadius={14}
      separator={
        <XStack backgroundColor="">
          <YStack width={20} backgroundColor="$color2" />
          <Separator borderColor="$color4" borderWidth="$0.25" />
        </XStack>
      }
    >
      {children}
    </YGroup>
  )
}
