import React, { useEffect, useRef } from 'react'
import type { TabsContentProps } from 'tamagui'
import { Separator, Tabs, Text, useEvent } from 'tamagui'

const tabs = ['Create Project', 'New Post', 'Add Event']
// const tabs = ['Create Project', 'Add Event']

/** ------ EXAMPLE ------ */
export const TabbarSwippable = ({
  CreateProjectForm,
  CreatePostForm,
  CreateEventForm,
}: {
  CreateProjectForm: React.ComponentType<unknown>
  CreatePostForm: React.ComponentType<unknown>
  CreateEventForm: React.ComponentType<unknown>
}) => {
  const [activeTabIndex, _setActiveTabIndex] = React.useState(0)
  const activeTabRef = useRef(activeTabIndex)
  activeTabRef.current = activeTabIndex

  const changeActiveTab = useEvent((activeTabIndex) => {
    _setActiveTabIndex(activeTabIndex)
  })

  useEffect(() => {
    changeActiveTab(activeTabIndex)
  }, [])

  return (
    <Tabs
      flexDirection="column"
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$color1"
      defaultValue={tabs[0]}
      flex={1}
      value={tabs[activeTabIndex]}
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
        {tabs.map((tab, index) => {
          const active = index === activeTabIndex
          return (
            <Tabs.Tab
              unstyled
              key={index}
              value={tab}
              flex={1}
              onPress={() => {
                changeActiveTab(index)
              }}
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
              >
                {tab}
              </Text>
            </Tabs.Tab>
          )
        })}
      </Tabs.List>
      <Separator />
      <TabsContent value="Create Project">
        <CreateProjectForm />
      </TabsContent>

      <TabsContent value="New Post">
        <CreatePostForm />
      </TabsContent>

      <TabsContent value="Add Event">
        <CreateEventForm />
      </TabsContent>
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      key={props.value}
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      height={600}
      width="100%"
      minWidth="$100%"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}
