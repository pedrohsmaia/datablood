import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'
import 'react-native-url-polyfill/auto'
import React from 'react'

React.AnimatedComponent = ({ children }) => <>{children}</>

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app')
  return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
