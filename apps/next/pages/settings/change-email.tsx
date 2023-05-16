import { ChangeEmailScreen } from 'app/features/settings/change-email-screen'
import { SettingsLayout } from 'app/features/settings/layout'
import Head from 'next/head'
import { NextPageWithLayout } from 'pages/_app'
import { userProtectedGetSSP } from 'utils/userProtected'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Change Email</title>
      </Head>
      <ChangeEmailScreen />
    </>
  )
}

Page.getLayout = (page) => <SettingsLayout>{page}</SettingsLayout>

export const getServerSideProps = userProtectedGetSSP()

export default Page
