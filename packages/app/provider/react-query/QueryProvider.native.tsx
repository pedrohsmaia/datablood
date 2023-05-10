import NetInfo from '@react-native-community/netinfo'
import {
  QueryClientProvider as QueryClientProviderOG,
  QueryClientProviderProps,
  focusManager,
  onlineManager,
} from '@tanstack/react-query'
import { useEffect } from 'react'
import type { AppStateStatus } from 'react-native'
import { AppState, Platform } from 'react-native'

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected)
  })
})

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

export const QueryClientProvider = (props: QueryClientProviderProps) => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])
  return <QueryClientProviderOG {...props} />
}
