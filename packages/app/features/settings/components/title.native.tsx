import { Text } from '@my/ui'
import { SettingTitleProps } from './title'

export const SettingTitle = ({ children, webOnly }: SettingTitleProps) =>
  webOnly ? null : (
    <Text color="$color" fontSize={32} fontWeight="700" mt="$4">
      {children}
    </Text>
  )
