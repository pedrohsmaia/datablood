import { Stack } from 'expo-router'
import type { SettingsLayoutProps } from './layout'

export const SettingsLayout = ({}: SettingsLayoutProps) => {
  return <Stack screenOptions={{
    headerShown: false
  }} />
}
