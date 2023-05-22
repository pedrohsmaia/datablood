import { H2, Paragraph, ScrollView, YStack, isWeb, withStaticProperties } from '@my/ui'

const Wrapper = YStack.styleable((props, ref) => (
  <YStack
    ref={ref}
    p="$5"
    f={1}
    gap="$5"
    jc="center"
    $sm={{ jc: 'space-between' }}
    $gtSm={{ mx: 'auto', maxWidth: 500, width: '100%' }}
    {...props}
  />
))

const Title = H2.styleable((props, ref) => (
  // don't display on native because of the stack title
  <H2 ref={ref} display={isWeb ? 'block' : 'none'} {...props} />
))

const Subtitle = Paragraph.styleable((props, ref) => (
  <Paragraph ref={ref} theme="alt1" {...props} />
))

const Header = YStack.styleable((props, ref) => <YStack ref={ref} {...props} />)

const Body = YStack.styleable((props, ref) => (
  <ScrollView>
    <YStack ref={ref} gap="$2" {...props} />
  </ScrollView>
))

const Footer = YStack.styleable((props, ref) => (
  // reverse the direction so that the primary button is on the bottom of the screen on mobile
  <YStack ref={ref} {...(!isWeb && { flexDirection: 'column-reverse' })} gap="$4" {...props} />
))

export const AuthFormWrapper = withStaticProperties(Wrapper, {
  Title,
  Subtitle,
  Header,
  Body,
  Footer,
})
