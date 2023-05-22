import { HomeLayout } from 'app/features/home/layout'
import { SettingsLayout } from 'app/features/settings/layout'
import Head from 'next/head'
import { NextPageWithLayout } from 'pages/_app'
import { userProtectedGetSSP } from 'utils/userProtected'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
    </>
  )
}

Page.getLayout = (page) => (
  <HomeLayout>
    <SettingsLayout isSettingsHome>{page}</SettingsLayout>
  </HomeLayout>
)

export const getServerSideProps = userProtectedGetSSP()

export default Page
