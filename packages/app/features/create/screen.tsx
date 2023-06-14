import { Button, H2, Paragraph, SchemaForm, YStack, formFields } from '@my/ui'
import { z } from 'zod'

export const CreateScreen = () => {
  return (
    <SchemaForm
      onSubmit={console.log}
      header={
        <YStack gap="$2" pb="$8">
          <H2 ta="center">Create Your New Project</H2>
          <Paragraph ta="center">
            User clicked on the CTA! This is a dummy page showing a form.
          </Paragraph>
        </YStack>
      }
      schema={z.object({
        title: formFields.text.min(10).optional().describe("Name // Your project's name"),
        description: formFields.textarea.describe(
          'Description // I need a mobile app for this one customer...'
        ),
        numOfDays: formFields.number.min(2).max(200).describe('Number of Days // 60 '),
        paidProject: formFields.boolean.describe('Paid Project'),
        billingAddress: formFields.address.describe('Billing Address'),
        type: formFields.select.describe('Project type'),
      })}
      defaultValues={{
        title: '',
        description: '',
        numOfDays: 10,
        paidProject: false,
        billingAddress: {
          street: '',
          zipCode: 0,
        },
        type: 'code',
      }}
      props={{
        type: {
          options: [
            {
              name: 'Code',
              value: 'code',
            },
            {
              name: 'Design',
              value: 'design',
            },
            {
              name: 'Consulting',
              value: 'consulting',
            },
          ],
        },
      }}
      renderAfter={({ submit }) => (
        <>
          <Button onPress={() => submit()} themeInverse>
            Submit
          </Button>
        </>
      )}
    />
  )
}
