import { SettingsScreen } from 'app/features/settings/screen'
import { SettingsLayout } from 'app/features/settings/layout'
import Head from 'next/head'
import { NextPageWithLayout } from 'pages/_app'
import { userProtectedGetSSP } from 'utils/userProtected'
import { YStack, Paragraph } from '@my/ui'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
    </>
  )
}

Page.getLayout = (page) => <SettingsLayout isSettingsHome>{page}</SettingsLayout>

export const getServerSideProps = userProtectedGetSSP()

export default Page
