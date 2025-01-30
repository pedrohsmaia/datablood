import { TabbarSwippable } from '@my/ui/src/components/SwippableTabBar'
import { SafeAreaView } from 'react-native'

import { CreateEventForm } from './CreateEventForm'
import { CreatePostForm } from './CreatePostForm'
import { CreateProjectForm } from './CreateProjectForm'

export const CreateScreen = () => (
  <>
    <TabbarSwippable
      CreateProjectForm={CreateProjectForm}
      CreatePostForm={CreatePostForm}
      CreateEventForm={CreateEventForm}
    />
    <SafeAreaView />
  </>
)
