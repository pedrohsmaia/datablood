import { TabLayout } from '@my/ui'
import { useEffect, useRef, useState } from 'react'
import type { TabsContentProps } from 'tamagui'
import { Separator, Tabs, Text, useEvent } from 'tamagui'

import { CreateEventForm } from './CreateEventForm'
import { CreatePostForm } from './CreatePostForm'
import { CreateProjectForm } from './CreateProjectForm'

const tabs = ['Create Project', 'New Post', 'Add Event']

export const CreateScreen = () => {
  const [activeTabIndex, _setActiveTabIndex] = useState(0)
  const activeTabRef = useRef(activeTabIndex)
  activeTabRef.current = activeTabIndex

  const changeActiveTab = useEvent((activeTabIndex) => {
    _setActiveTabIndex(activeTabIndex)
  })

  const [currentTab, setCurrentTab] = useState<string>(tabs[0])

  useEffect(() => {
    changeActiveTab(activeTabIndex)
  }, [])

  const renderTab = () => {
    switch (currentTab) {
      case 'Create Project':
        return <CreateProjectForm />
      case 'New Post':
        return <CreatePostForm />
      case 'Add Event':
        return <CreateEventForm />
    }
  }

  return (
    <Tabs
      flexDirection="column"
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$color1"
      defaultValue={tabs[0]}
      flex={1}
      value={currentTab}
      onValueChange={setCurrentTab}
      alignItems="center"
      alignSelf="center"
      width="100%"
      $gtSm={{
        maxWidth: 660,
      }}
    >
      <Tabs.List
        w="100%"
        userSelect="none"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={0}
        borderBottomWidth={1}
        borderColor="$borderColor"
      >
        {tabs.map((tab) => {
          const active = tab === currentTab

          return (
            <Tabs.Tab
              unstyled
              key={tab}
              value={tab}
              flex={1}
              pressStyle={{ opacity: 0.5 }}
              justifyContent="center"
              alignItems="center"
              p="$4"
              borderBottomWidth={1}
              borderColor={active ? '$accentColor' : '$borderColor'}
            >
              <Text
                theme={active ? undefined : 'alt1'}
                cursor="pointer"
                fontWeight={active ? '600' : undefined}
                numberOfLines={1}
              >
                {tab}
              </Text>
            </Tabs.Tab>
          )
        })}
      </Tabs.List>
      <Separator />

      <TabsContent value={currentTab} forceMount flex={1} justifyContent="center">
        {renderTab()}
      </TabsContent>
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      key={props.value}
      flex={1}
      borderColor="$background"
      height={600}
      width="100%"
      minWidth="$100%"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}
