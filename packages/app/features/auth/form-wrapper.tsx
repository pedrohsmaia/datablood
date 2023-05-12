import { H2, Paragraph, YStack, isWeb, withStaticProperties } from '@my/ui'

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <YStack
    p="$5"
    f={1}
    gap="$5"
    jc="center"
    $sm={{ jc: 'space-between' }}
    $gtSm={{ mx: 'auto', maxWidth: 500, width: '100%' }}
  >
    {children}
  </YStack>
)

const Title = ({ children }: { children: React.ReactNode }) => (
  // don't display on native because of the stack title
  <H2 display={isWeb ? 'block' : 'none'}>{children}</H2>
)

const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <Paragraph theme="alt1">{children}</Paragraph>
)

const Header = ({ children }: { children: React.ReactNode }) => <YStack>{children}</YStack>

const Body = ({ children }: { children: React.ReactNode }) => <YStack gap="$2">{children}</YStack>

const Footer = ({ children }: { children: React.ReactNode }) => (
  // reverse the direction so that the primary button is on the bottom of the screen on mobile
  <YStack {...(!isWeb && { flexDirection: 'column-reverse' })} gap="$4">
    {children}
  </YStack>
)

export const AuthFormWrapper = withStaticProperties(Wrapper, {
  Title,
  Subtitle,
  Header,
  Body,
  Footer,
})
 