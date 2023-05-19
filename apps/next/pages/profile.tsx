import { ProfileScreen } from 'app/features/profile/screen'
import Head from 'next/head'
import { userProtectedGetSSP } from 'utils/userProtected'

export default function Page() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileScreen />
    </>
  )
}

export const getServerSideProps = userProtectedGetSSP()
