import { H2, Paragraph, ScrollView } from '@my/ui'

export const CreateScreen = () => {
  return (
    <ScrollView p="$4">
      <H2 ta="center">Create your new...</H2>
      <Paragraph mt="$2" ta="center">
        User clicked on the CTA, here's your chance!
      </Paragraph>
    </ScrollView>
  )
}
