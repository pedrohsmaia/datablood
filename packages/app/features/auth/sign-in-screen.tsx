import { Button, H2, Link, Paragraph, SchemaForm, Text, YStack, formFields } from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useEffect } from 'react'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'

// nice article for implementing Supabase OAuth with expo-auth-session: https://dev.to/fedorish/google-sign-in-using-supabase-and-react-native-expo-14jf

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

const SignInSchema = z.object({
  email: formFields.email.describe('Email // Enter your email'),
  password: formFields.password.describe('Password // Choose a password'),
})

export const SignInScreen = () => {
  const supabase = useSupabase()
  const router = useRouter()
  const { params } = useParams()
  const updateParams = useUpdateParams()
  useEffect(() => {
    // remove the persisted email from the url, mostly to not leak user's email in case they share it
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [])
  const form = useForm<z.infer<typeof SignInSchema>>()

  async function signInWithEmail({ email, password }: z.infer<typeof SignInSchema>) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      const errorMessage = error?.message.toLowerCase()
      if (errorMessage.includes('email')) {
        form.setError('email', { type: 'custom', message: errorMessage })
      } else if (errorMessage.includes('password')) {
        form.setError('password', { type: 'custom', message: errorMessage })
      } else {
        form.setError('root', { type: 'custom', message: errorMessage })
      }
    } else {
      router.replace('/')
    }
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        schema={SignInSchema}
        defaultValues={{
          email: params?.email,
          password: '',
        }}
        onSubmit={signInWithEmail}
        header={
          <YStack gap="$3" mb="$4">
            <H2>Welcome Back</H2>
            <Paragraph theme="alt1">Sign in to your account</Paragraph>
          </YStack>
        }
        props={{
          password: {
            afterElement: <ForgotPasswordLink />,
          },
        }}
        renderAfter={({ submit }) => (
          <>
            <Button onPress={() => submit()} borderRadius={100} themeInverse>
              Sign in
            </Button>
            <SignUpLink />
            {/* <YStack>
            <Button disabled={loading} onPress={() => signInWithProvider('github')}>
              GitHub Login
            </Button>
          </YStack> */}
          </>
        )}
      />
    </FormProvider>
  )
}

const SignUpLink = () => {
  const email = useWatch<z.infer<typeof SignInSchema>>({ name: 'email' })
  return (
    <Link
      replace
      href={`/sign-up?${new URLSearchParams(email ? { email } : undefined).toString()}`}
      textAlign="center"
      theme="alt1"
    >
      Don't have an account? <Text textDecorationLine="underline">Sign up</Text>
    </Link>
  )
}

const ForgotPasswordLink = () => {
  const email = useWatch<z.infer<typeof SignInSchema>>({ name: 'email' })

  return (
    <Link
      mt="$1"
      href={`/reset-password?${new URLSearchParams(email ? { email } : undefined)}`}
      theme="alt2"
      textDecorationLine="underline"
    >
      Forgot your password?
    </Link>
  )
}
