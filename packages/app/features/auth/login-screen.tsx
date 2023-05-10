import { Button, Form, Input, Label, YStack, styled, useToastController } from '@my/ui'
import { Provider } from '@supabase/supabase-js'
import { redirect } from 'app/utils/redirect'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'

export const LoginScreen = () => {
  const supabase = useSupabase()
  const toast = useToastController()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) toast.show(error.message)
    else {
      router.replace('/')
    }
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) toast.show(error.message)
    else toast.show('Check your email for a link!')
    setLoading(false)
  }

  async function signInWithProvider(provider: Provider) {
    setLoading(true)
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        skipBrowserRedirect: true,
      },
    })

    if (error) {
      toast.show(error.message)
    } else {
      redirect(data.url)
    }
    setLoading(false)
  }
  return (
    <Form
      onSubmit={() => signInWithEmail()}
      p="$5"
      f={1}
      gap="$10"
      jc="space-between"
      $gtMd={{
        width: 500,
        jc: 'center',
        mx: 'auto',
      }}
    >
      <YStack gap="$2">
        <YStack>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            placeholder="email@address.com"
            autoCapitalize="none"
          />
        </YStack>
        <YStack>
          <Label htmlFor="password">Password</Label>
          <Input
            secureTextEntry
            textContentType="password"
            id="password"
            autoComplete="password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            autoCapitalize={'none'}
          />
        </YStack>
      </YStack>

      <YStack gap="$2">
        <YStack>
          <Form.Trigger asChild disabled={loading}>
            <Button themeInverse>Sign in</Button>
          </Form.Trigger>
        </YStack>
        {/* <YStack>
          <Button disabled={loading} onPress={() => signInWithProvider('github')}>
            GitHub Login
          </Button>
        </YStack> */}
        <YStack>
          <Button chromeless disabled={loading} onPress={() => signUpWithEmail()}>
            Sign up
          </Button>
        </YStack>
      </YStack>
    </Form>
  )
}
