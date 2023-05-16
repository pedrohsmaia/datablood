import { Button, H2, XStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { useRouter } from 'next/router'

export type SettingTitleProps = { children: React.ReactNode; backHref?: string, webOnly?: boolean }
export const SettingTitle = ({ children, backHref }: SettingTitleProps) => {
  return (
    <XStack gap="$4" ai="center">
      {!!backHref && <Button {...useLink({ href: backHref })} icon={<ChevronLeft size={20} />} circular  />}
      <H2>{children}</H2>
    </XStack>
  )
}
