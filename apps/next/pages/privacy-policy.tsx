import { PrivacyPolicyScreen } from 'app/features/legal/privacy-policy-screen'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <PrivacyPolicyScreen />
    </>
  )
}

export default Page
