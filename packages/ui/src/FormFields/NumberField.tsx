import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Input, InputProps, Label, Paragraph, Theme, YStack } from 'tamagui'

export const NumberField = (props: Pick<InputProps, 'size' | 'autoFocus'>) => {
  const { field, error } = useTsController<number>()
  const { label, defaultValue, isOptional, placeholder, uniqueId } = useFieldInfo()
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
          keyboardType="number-pad"
          value={field.value?.toString() || '0'}
          onChangeText={(text) => {
            const num = Number(text)
            if (isNaN(num)) {
              if (!field.value) {
                field.onChange(defaultValue || 0)
              }
              return
            }
            field.onChange(num)
          }}
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
