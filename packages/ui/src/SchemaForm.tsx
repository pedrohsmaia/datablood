import { createTsForm, createUniqueFieldSchema } from '@ts-react/form'
import { forwardRef } from 'react'
import { Form, FormProps } from 'tamagui'
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
import { EmailField } from './FormFields/EmailField'
import { PasswordField } from './FormFields/PasswordField'

export const formFields = {
  text: z.string(),
  email: createUniqueFieldSchema(z.string().email(), 'email'),
  password: createUniqueFieldSchema(z.string().min(6), 'password'),
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
  [formFields.email, EmailField] as const,
  [formFields.password, PasswordField] as const,
  [formFields.textarea, TextAreaField] as const,
  [formFields.number, NumberField] as const,
  [formFields.boolean, BooleanField] as const,
  [formFields.boolean_switch, BooleanSwitchField] as const,
  [formFields.boolean_checkbox, BooleanCheckboxField] as const,
  [formFields.select, SelectField] as const,
  [formFields.address, AddressField] as const,
] as const

const _SchemaForm = createTsForm(mapping, {
  FormComponent: (props: FormProps) => (
    <FormWrapper asChild>
      <Form {...props}>{props.children}</Form>
    </FormWrapper>
  ),
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
        p: '$4',
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
      {(fields) => (
        <FormWrapper.Body>
          {header}
          {Object.values(fields)}
        </FormWrapper.Body>
      )}
    </_SchemaForm>
  )
})
