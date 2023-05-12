import { useRouter } from 'solito/router'
import { Onboarding } from './onboarding'

export const OnboardingScreen = () => {
  const router = useRouter()
  return <Onboarding onOnboarded={() => router.push('/sign-in')} />
}
