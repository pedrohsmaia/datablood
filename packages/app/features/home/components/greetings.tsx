import { useToastController, Spinner, H2 } from '@my/ui'
import { api } from 'app/utils/api'
import { useEffect } from 'react'
import { Platform } from 'react-native'

export const Greetings = () => {
  const { data, isLoading, isError } = api.greeting.greet.useQuery()
  const toast = useToastController()
  const isNative = Platform.OS === 'ios' || Platform.OS === 'android'
  useEffect(() => {
    data &&
      toast.show('tRPC server connected.', {
        native: isNative,
        duration: 2000,
        burntOptions: {
          from: 'top',
          preset: 'done',
        },
      })
    isError &&
      toast.show(`Error connecting to tPRC server.`, {
        native: isNative,
        burntOptions: {
          preset: 'error',
          shouldDismissByDrag: true,
          from: 'bottom',
        },
      })
  }, [data, isError, toast])
  return (
    <H2 m="$4">
      {isLoading ? <Spinner /> : null}
      {data ? data : null}
    </H2>
  )
}
