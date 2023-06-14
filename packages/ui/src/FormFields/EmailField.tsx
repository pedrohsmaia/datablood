import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Input, InputProps, Label, Paragraph, Theme, YStack } from 'tamagui'

export const EmailField = (props: Pick<InputProps, 'size' | 'autoFocus'>) => {
  const { field, error } = useTsController<string>()
  const { label, isOptional, placeholder, uniqueId } = useFieldInfo()
  const reactId = useId()
  const id = uniqueId || reactId

  return (
    <Theme name={error ? 'red' : undefined}>
      <YStack>
        {!!label && (
          <Label size={props.size} htmlFor={id}>
            {label} {isOptional && `(Optional)`}
          </Label>
        )}
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          value={field.value}
          onChangeText={(text) => field.onChange(text)}
          onBlur={field.onBlur}
          ref={field.ref}
          placeholder={placeholder}
          id={id}
          {...props}
        />
        {error && (
          <Paragraph mt="$2" theme="alt2">
            {error.errorMessage}
          </Paragraph>
        )}
      </YStack>
    </Theme>
  )
}
