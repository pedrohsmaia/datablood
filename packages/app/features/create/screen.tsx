import { H1, Paragraph, ScrollView } from '@my/ui'

export const CreateScreen = () => {
  return (
    <ScrollView p="$4">
      <H1 ta="center">Create your new...</H1>
      <Paragraph mt="$2" ta="center">
        This is your CTA page
      </Paragraph>
    </ScrollView>
  )
}
