import { Button, Footer, Main, SizableText, Theme, YStack, isWeb } from '@my/ui'
import { Link, useLink } from 'solito/link'

export type LegalLayoutProps = {
  children?: React.ReactNode
}

export const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <YStack f={1}>
      <YStack
        gap="$10"
        borderWidth="$0"
        borderBottomColor="$borderColor"
        borderStyle="solid"
        borderBottomWidth="$0.5"
        jc="center"
        px="$4"
        backgroundColor="$color1"
        ai="center"
        f={1}
      >
        <Main maxWidth={800} f={1}>
          {children}
        </Main>

        {isWeb && (
          <Footer p="$4">
            <SizableText size="$5" fontWeight="900" textDecorationLine="underline">
              <Theme inverse>
                <Button {...useLink({ href: '/' })}>Go Home</Button>
              </Theme>
            </SizableText>
          </Footer>
        )}
      </YStack>
    </YStack>
  )
}
