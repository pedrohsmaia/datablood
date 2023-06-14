import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Fieldset, Input, InputProps, Label, Theme } from 'tamagui'
import { FieldError } from '../FieldError'
import { Shake } from '../Shake'

export const TextField = (props: Pick<InputProps, 'size' | 'autoFocus'>) => {
  const { field, error } = useTsController<string>()
  const { label, isOptional, placeholder, uniqueId } = useFieldInfo()
  const reactId = useId()
  const id = uniqueId || reactId

  return (
    <Theme name={error ? 'red' : undefined}>
      <Fieldset>
        {!!label && (
          <Label size={props.size} htmlFor={id}>
            {label} {isOptional && `(Optional)`}
          </Label>
        )}
        <Shake shakeKey={error?.errorMessage}>
          <Input
            value={field.value}
            onChangeText={(text) => field.onChange(text)}
            onBlur={field.onBlur}
            ref={field.ref}
            placeholder={placeholder}
            id={id}
            {...props}
          />
        </Shake>
        <FieldError message={error?.errorMessage} />
      </Fieldset>
    </Theme>
  )
}
