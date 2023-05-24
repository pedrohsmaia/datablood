import { TermsOfServiceScreen } from 'app/features/legal/terms-of-service-screen'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <TermsOfServiceScreen />
    </>
  )
}

export default Page
