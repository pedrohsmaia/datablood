import { LinearGradient } from '@tamagui/linear-gradient'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import {
  Adapt,
  Fieldset,
  Label,
  Select,
  type SelectProps,
  Sheet,
  Theme,
  YStack,
  getFontSize,
  isWeb,
} from 'tamagui'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'

type SelectItem = {
  value: string
  name: string
}

export const SelectField = ({
  options,
  native = true,
  ...props
}: {
  options: SelectItem[]
} & Pick<SelectProps, 'size' | 'native'>) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string>()
  const { label, isOptional } = useFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  console.log('SelectField props', { native })

  return (
    <Theme name={error ? 'red' : null} forceClassName>
      <Fieldset>
        {!!label && (
          <Label theme="alt1" size={props.size || '$3'} htmlFor={id}>
            {label} {isOptional && `(Optional)`}
          </Label>
        )}
        <Shake shakeKey={error?.errorMessage}>
          <Select
            native={native}
            id={id}
            value={field.value}
            onValueChange={field.onChange}
            {...props}
          >
            <Select.Trigger w={180} iconAfter={ChevronDown}>
              <Select.Value placeholder="Something" />
            </Select.Trigger>

            <Adapt when="sm" platform="touch">
              <Sheet native modal dismissOnSnapToBottom>
                <Sheet.Frame>
                  <Sheet.ScrollView>
                    <Adapt.Contents />
                  </Sheet.ScrollView>
                </Sheet.Frame>
                <Sheet.Overlay />
              </Sheet>
            </Adapt>

            <Select.Content zIndex={200000}>
              <Select.ScrollUpButton ai="center" jc="center" pos="relative" w="100%" h="$3">
                <YStack zi={10}>
                  <ChevronUp size={20} />
                </YStack>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  fullscreen
                  colors={['$background', '$backgroundTransparent']}
                  br="$4"
                />
              </Select.ScrollUpButton>

              <Select.Group disabled={disabled} space="$0" miw={400}>
                {options.map((item, i) => {
                  return (
                    <Select.Item pl="$2" index={i} key={item.name} value={item.value} miw={400}>
                      <Select.ItemText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</Select.ItemText>
                      {/* <Select.ItemIndicator marginRight="auto">
                            <Check size={16} />
                          </Select.ItemIndicator> */}
                    </Select.Item>
                  )
                })}
              </Select.Group>
              {/* special icon treatment for native */}
              {native && isWeb && (
                <YStack fullscreen ai="center" jc="center" w="$4" pe="none">
                  <ChevronDown size={getFontSize((props.size ?? '$true') as number)} />
                </YStack>
              )}

              <Select.ScrollDownButton ai="center" jc="center" pos="relative" w="100%" h="$3">
                <YStack zi={10}>
                  <ChevronDown size={20} />
                </YStack>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  fullscreen
                  colors={['$backgroundTransparent', '$background']}
                  br="$4"
                />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select>
        </Shake>
        <FieldError message={error?.errorMessage} />
      </Fieldset>
    </Theme>
  )
}
