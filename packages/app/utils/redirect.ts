import { isWeb } from '@my/ui'
import * as Linking from 'expo-linking'

export const redirect = (url: string) => {
  if (isWeb) {
    location.href = url
  } else {
    Linking.openURL(url)
  }
}
