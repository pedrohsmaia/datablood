import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'
import { userProtectedGetSSP } from 'utils/userProtected'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeScreen />
    </>
  )
}

export const getServerSideProps = userProtectedGetSSP()
