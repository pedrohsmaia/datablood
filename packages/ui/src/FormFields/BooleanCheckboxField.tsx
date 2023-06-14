import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import {
  Checkbox,
  CheckboxProps,
  CheckedState,
  Label,
  Paragraph,
  Theme,
  XStack,
  YStack,
} from 'tamagui'

export const BooleanCheckboxField = (props: Pick<CheckboxProps, 'size' | 'native'>) => {
  const { field, error } = useTsController<CheckedState>()
  const { label, isOptional, uniqueId } = useFieldInfo()
  const reactId = useId()
  const id = uniqueId || reactId

  return (
    <Theme name={error ? 'red' : undefined}>
      <YStack>
        <XStack gap="$4">
          {!!label && (
            <Label size={props.size} htmlFor={id}>
              {label} {isOptional && `(Optional)`}
            </Label>
          )}
          <Checkbox
            native
            checked={field.value}
            onCheckedChange={(checked) => field.onChange(checked)}
            ref={field.ref}
            id={id}
            {...props}
          >
            <Checkbox.Indicator />
          </Checkbox>
        </XStack>
        {error && (
          <Paragraph mt="$2" theme="alt2">
            {error.errorMessage}
          </Paragraph>
        )}
      </YStack>
    </Theme>
  )
}
