import { SettingsScreen } from 'app/features/settings/screen'
import Head from 'next/head'
import { userProtectedGetSSP } from 'utils/userProtected'

export default function Page() {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <SettingsScreen />
    </>
  )
}

export const getServerSideProps = userProtectedGetSSP()
