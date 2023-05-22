import { useRouter } from 'solito/router'
import { Onboarding } from './onboarding'

// native only
export const OnboardingScreen = () => {
  const router = useRouter()
  return <Onboarding onOnboarded={() => router.push('/sign-up')} />
}
