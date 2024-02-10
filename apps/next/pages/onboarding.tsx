import type { GetServerSideProps } from 'next'

/**
 * this page exists to keep it 1-1 with native
 * onboarding slides are on a separate page on mobile (/onboarding) but as sidebar on web
 */
export default function Page() {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/sign-in',
      permanent: false,
    },
  }
}
