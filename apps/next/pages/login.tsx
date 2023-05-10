import { LoginScreen } from 'app/features/auth/login-screen'
import Head from 'next/head'
import { guestOnlyGetSSP } from 'utils/guesOnly'

export default function Page() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginScreen />
    </>
  )
}


export const getServerSideProps = guestOnlyGetSSP()