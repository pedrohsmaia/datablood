import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Label, Paragraph, Switch, SwitchProps, Theme, YStack } from 'tamagui'

export const BooleanSwitchField = (props: Pick<SwitchProps, 'size' | 'native'>) => {
  const { field, error } = useTsController<boolean>()
  const { label, isOptional, uniqueId } = useFieldInfo()
  const reactId = useId()
  const id = uniqueId || reactId

  return (
    <Theme name={error ? 'red' : undefined}>
      <YStack ai="flex-start">
        {!!label && (
          <Label size={props.size} htmlFor={id}>
            {label} {isOptional && `(Optional)`}
          </Label>
        )}

        <Switch
          native
          checked={field.value}
          onCheckedChange={(checked) => field.onChange(checked)}
          ref={field.ref}
          id={id}
          {...props}
        >
          <Switch.Thumb animation="100ms" />
        </Switch>

        {error && (
          <Paragraph mt="$2" theme="alt2">
            {error.errorMessage}
          </Paragraph>
        )}
      </YStack>
    </Theme>
  )
}
