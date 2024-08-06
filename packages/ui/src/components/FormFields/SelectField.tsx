import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useFieldInfo, useTsController } from '@ts-react/form'
import React, { useId } from 'react'
import {
  Adapt,
  Fieldset,
  FontSizeTokens,
  Label,
  Select,
  type SelectProps,
  Sheet,
  Theme,
  YStack,
  getFontSize,
} from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

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
  const [val, setVal] = React.useState('')
  const items = options
  return (
    <Theme name={error ? 'red' : null} forceClassName>
      <Fieldset>
        {!!label && (
          <Label theme="alt1" size={props.size || '$3'} htmlFor={id}>
            {label} {isOptional && `(Optional)`}
          </Label>
        )}
        <Select value={val} onValueChange={setVal} disablePreventBodyScroll {...props}>
          <Select.Trigger minWidth="100%" $md={{ maxWidth: 220 }} iconAfter={ChevronDown}>
            <Select.Value placeholder="Choose a project type" />
          </Select.Trigger>

          <Adapt when="sm" platform="touch">
            <Sheet
              zIndex={1000}
              native={!!native}
              native
              dismissOnSnapToBottom
              modal
              animationConfig={{
                type: 'spring',
                damping: 20,
                mass: 1.2,
                stiffness: 250,
              }}
              snapPoints={[80]}
            >
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>
              <Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Sheet>
          </Adapt>

          <Select.Content>
            <Select.ScrollUpButton
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height="$3"
            >
              <YStack zIndex={10}>
                <ChevronUp size={20} />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={['$background', 'transparent']}
                borderRadius="$4"
              />
            </Select.ScrollUpButton>

            <Select.Viewport
              // to do animations:
              // animation="quick"
              // animateOnly={['transform', 'opacity']}
              // enterStyle={{ o: 0, y: -10 }}
              // exitStyle={{ o: 0, y: 10 }}
              elevate
              elevation="$19"
              minWidth={200}
              elevationAndroid="$19"
            >
              <Select.Group>
                <Select.Label>Project Type</Select.Label>
                {/* for longer lists memoizing these is useful */}
                {React.useMemo(
                  () =>
                    items.map((item, i) => {
                      return (
                        <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                          <Select.ItemText>{item.name}</Select.ItemText>
                          <Select.ItemIndicator marginLeft="auto">
                            <Check size={16} />
                          </Select.ItemIndicator>
                        </Select.Item>
                      )
                    }),
                  [items]
                )}
              </Select.Group>
              {/* Native gets an extra icon */}
              {native && (
                <YStack
                  position="absolute"
                  right={0}
                  top={0}
                  bottom={0}
                  alignItems="center"
                  justifyContent="center"
                  width="$4"
                  pointerEvents="none"
                >
                  <ChevronDown size={getFontSize((props.size as FontSizeTokens) ?? '$true')} />
                </YStack>
              )}
            </Select.Viewport>

            <Select.ScrollDownButton
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height="$3"
            >
              <YStack zIndex={10}>
                <ChevronDown size={20} />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={['transparent', '$background']}
                borderRadius="$4"
              />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select>
        <FieldError message={error?.errorMessage} />
      </Fieldset>
    </Theme>
  )
}
