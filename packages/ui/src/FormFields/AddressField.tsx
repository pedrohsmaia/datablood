import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Input, InputProps, Label, Paragraph, SizeTokens, Theme, XStack, YStack } from 'tamagui'
import { z } from 'zod'

export const AddressSchema = z.object({
  street: z.string(),
  zipCode: z.string().regex(/d{5}/, 'ZIP code should have 5 integers'),
})

export const AddressField = (props: Pick<InputProps, 'size'>) => {
  const { field, error } = useTsController<z.infer<typeof AddressSchema>>()
  const { label, uniqueId } = useFieldInfo()
  const reactId = useId()
  const id = uniqueId || reactId

  return (
    <YStack gap="$2">
      <Label>{label}</Label>

      <XStack $sm={{ flexDirection: 'column' }} $gtSm={{ flexWrap: 'wrap' }} gap="$4">
        <Theme name={error?.street ? 'red' : undefined}>
          <YStack f={1}>
            <Label theme="alt1" size={props.size} htmlFor={`${id}-street`}>
              Street
            </Label>
            <Input
              value={field.value?.street}
              onChangeText={(street) => field.onChange({ ...field.value, street })}
              onBlur={field.onBlur}
              ref={field.ref}
              placeholder="e.g. 4116 Pretty View Lane"
              id={`${id}-street`}
              {...props}
            />
            {error?.street && (
              <Paragraph mt="$2" theme="alt2">
                {error?.street.errorMessage}
              </Paragraph>
            )}
          </YStack>
        </Theme>

        <Theme name={error?.zipCode ? 'red' : undefined}>
          <YStack f={1}>
            <Label theme="alt1" size={props.size} htmlFor={`${id}-zip-code`}>
              US ZIP Code
            </Label>
            <Input
              value={field.value?.zipCode}
              onChangeText={(zipCode) => field.onChange({ ...field.value, zipCode })}
              onBlur={field.onBlur}
              ref={field.ref}
              placeholder="e.g. 12345"
              id={`${id}-zip-code`}
              {...props}
            />
            {error?.zipCode && (
              <Paragraph mt="$2" theme="alt2">
                {error?.zipCode.errorMessage}
              </Paragraph>
            )}
          </YStack>
        </Theme>
      </XStack>
    </YStack>
  )
}
