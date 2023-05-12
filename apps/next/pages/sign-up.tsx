import { AuthLayout } from 'app/features/auth/layout'
import { SignUpScreen } from 'app/features/auth/sign-up-screen'
import Head from 'next/head'
import { guestOnlyGetSSP } from 'utils/guesOnly'
import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Sign up</title>
    </Head>
    <SignUpScreen />
  </>
)

Page.getLayout = (children) => <AuthLayout>{children}</AuthLayout>

export const getServerSideProps = guestOnlyGetSSP()

export default Page
