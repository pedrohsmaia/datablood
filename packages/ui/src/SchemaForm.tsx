import { createTsForm, createUniqueFieldSchema } from '@ts-react/form'

import { forwardRef, memo, useMemo } from 'react'
import { Form, FormProps, Theme } from 'tamagui'
import { z } from 'zod'
import { AddressField, AddressSchema } from './FormFields/AddressField'
import { BooleanCheckboxField } from './FormFields/BooleanCheckboxField'
import { BooleanField } from './FormFields/BooleanField'
import { BooleanSwitchField } from './FormFields/BooleanSwitchField'
import { NumberField } from './FormFields/NumberField'
import { SelectField } from './FormFields/SelectField'
import { TextAreaField } from './FormFields/TextAreaField'
import { TextField } from './FormFields/TextField'
import { FormWrapper } from './FormWrapper'
import { PasswordField } from './FormFields/PasswordField'
import { useFormContext } from 'react-hook-form'
import { FieldError } from './FieldError'

export const formFields = {
  text: z.string(),
  password: createUniqueFieldSchema(z.string(), 'password'),
  textarea: createUniqueFieldSchema(z.string(), 'textarea'),
  /**
   * input that takes number
   */
  number: z.number(),
  /**
   * adapts to native switch on native, and native checkbox on web
   */
  boolean: z.boolean(),
  /**
   * switch field on all platforms
   */
  boolean_switch: createUniqueFieldSchema(z.boolean(), 'boolean_switch'),
  /**
   * checkbox field on all platforms
   */
  boolean_checkbox: createUniqueFieldSchema(z.boolean(), 'boolean_checkbox'),
  /**
   * make sure to pass options={} to props for this
   */
  select: createUniqueFieldSchema(z.string(), 'select'),
  /**
   * example of how to handle more complex fields
   */
  address: createUniqueFieldSchema(AddressSchema, 'address'),
}

// function createFormSchema<T extends ZodRawShape>(getData: (fields: typeof formFields) => T) {
//   return z.object(getData(formFields))
// }

const mapping = [
  [formFields.text, TextField] as const,
  [formFields.password, PasswordField] as const,
  [formFields.textarea, TextAreaField] as const,
  [formFields.number, NumberField] as const,
  [formFields.boolean, BooleanField] as const,
  [formFields.boolean_switch, BooleanSwitchField] as const,
  [formFields.boolean_checkbox, BooleanCheckboxField] as const,
  [formFields.select, SelectField] as const,
  [formFields.address, AddressField] as const,
] as const

const FormComponent = (props: FormProps) => {
  return (
    <FormWrapper>
      <Form {...props}>{props.children}</Form>
    </FormWrapper>
  )
}

const _SchemaForm = createTsForm(mapping, {
  FormComponent,
})

export const SchemaForm = forwardRef<
  any,
  React.ComponentProps<typeof _SchemaForm> & {
    header?: React.ReactNode
  }
>(({ schema, header, renderAfter, ...props }, ref) => {
  return (
    <_SchemaForm
      formProps={{
        $gtSm: {
          width: '100%',
          maxWidth: 600,
          als: 'center',
        },
        flex: 1,
        ...props.formProps,
      }}
      schema={schema}
      renderAfter={
        renderAfter
          ? (vars) => <FormWrapper.Footer>{renderAfter(vars)}</FormWrapper.Footer>
          : undefined
      }
      {...props}
    >
      {(fields, context) => (
        <FormWrapper.Body>
          {header}
          {props.children ? props.children(fields, context) : Object.values(fields)}
        </FormWrapper.Body>
      )}
    </_SchemaForm>
  )
})

// handle manual errors (most commonly coming from a server) for cases where it's not for a specific field - make sure to wrap inside a provider first
// stopped using it cause of state issues it introduced - set the errors to specific fields instead of root for now
export const RootError = () => {
  const context = useFormContext()
  const errorMessage = context?.formState?.errors?.root?.message

  return (
    <Theme name="red">
      <FieldError message={errorMessage} />
    </Theme>
  )
}
