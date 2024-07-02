import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Fieldset, type InputProps, Label, Theme, XStack } from 'tamagui'
import { z } from 'zod'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'
import { ImagePicker } from '../elements/pickers/ImagePicker'

export const ImagePickerSchema = z.object({
  imageSource: z.string().url(),
})

export const ImagePickerField = (props: Pick<InputProps, 'size'>) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<z.infer<typeof ImagePickerSchema>>()
  const { label } = useFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Fieldset gap="$2">
      <Label theme="alt1" size="$3">
        {label}
      </Label>

      <XStack $sm={{ fd: 'column' }} $gtSm={{ fw: 'wrap' }} gap="$4">
        <Theme name={error?.imageSource ? 'red' : null} forceClassName>
          <Fieldset $gtSm={{ fb: 0 }} f={1}>
            <Shake shakeKey={error?.imageSource?.errorMessage}>
              <ImagePicker
                disabled={disabled}
                placeholderTextColor="$color10"
                value={field.value?.imageSource}
                onChangeText={(imageSource) => field.onChange({ ...field.value, imageSource })}
                onBlur={field.onBlur}
                ref={field.ref}
                placeholder=""
                id={`${id}-date-value`}
                {...props}
              />
            </Shake>
            <FieldError message={error?.imageSource?.errorMessage} />
          </Fieldset>
        </Theme>
      </XStack>
    </Fieldset>
  )
}
