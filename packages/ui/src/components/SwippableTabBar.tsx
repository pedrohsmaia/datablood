import React, { useEffect, useMemo, useRef } from 'react'
import type { ViewStyle } from 'react-native'
import { Animated, PanResponder } from 'react-native'
import type { TabsContentProps } from 'tamagui'
import { H5, Separator, Tabs, Text, View, debounce, useEvent, useTheme } from 'tamagui'

// const tabs = ['Create Project', 'New Post', 'Add Event']
const tabs = ['New Post', 'Add Event']

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
  const boxHPosition = useRef(new Animated.Value(0)).current
  const [activeTabIndex, _setActiveTabIndex] = React.useState(0)
  const setActiveTabIndex = debounce(_setActiveTabIndex, 100)
  const activeTabRef = useRef(activeTabIndex)
  activeTabRef.current = activeTabIndex
  const dragging = useRef(false)
  const theme = useTheme()
  const [pointerWidth, setPointerWidth] = React.useState(100)

  const pointerWidthRef = useRef(pointerWidth)
  pointerWidthRef.current = pointerWidth

  const chagenActiveTab = useEvent((activeTabIndex) => {
    setActiveTabIndex(activeTabIndex)
    boxHPosition.flattenOffset()
    Animated.spring(boxHPosition, {
      toValue: activeTabIndex * pointerWidthRef.current,
      useNativeDriver: true,
    }).start()
  })

  useEffect(() => {
    chagenActiveTab(activeTabIndex)
  }, [pointerWidth])

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        boxHPosition.extractOffset()
        boxHPosition.setValue(0)
        dragging.current = true
      },
      onPanResponderMove: Animated.event([null, { dx: boxHPosition }], {
        useNativeDriver: true,
      }),
      onPanResponderRelease: (_, gestureState) => {
        const nearestTab = Math.max(
          Math.min(
            Math.round(gestureState.dx / pointerWidthRef.current),
            tabs.length - 1 - activeTabRef.current
          ),
          -activeTabRef.current
        )

        const nextTabIndex = activeTabRef.current + nearestTab

        Animated.spring(boxHPosition, {
          toValue: nearestTab * pointerWidthRef.current,
          useNativeDriver: true,
        }).start()
        dragging.current = false

        setActiveTabIndex(nextTabIndex)
      },
    })
  ).current

  const animatedStyle = useMemo(
    () =>
      ({
        position: 'absolute',
        height: '70%',
        flexShrink: 0,
        backgroundColor: theme.color1.val,
        width: pointerWidth,
        borderRadius: 1000_000,
        trasform: [{ translateX: boxHPosition }],
        shadowColor: theme.color11.val,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      } as ViewStyle),
    [theme.color2.val, theme.color11.val, pointerWidth]
  )

  return (
    <Tabs
      flexDirection="column"
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$color1"
      defaultValue={tabs[0]}
      flex={1}
      value={tabs[activeTabIndex]}
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      maxWidth="80%"
      minWidth="80%"
      marginTop="$4"
    >
      <View
        flexDirection="row"
        borderRadius={1000_000}
        backgroundColor="$color2"
        justifyContent="center"
        width="100%"
        paddingHorizontal="$2"
      >
        <Tabs.List
          minWidth="100%"
          userSelect="none"
          flexDirection="row"
          alignItems="center"
          paddingVertical="$2"
          height="$4"
          onLayout={(e) => {
            const width = e.nativeEvent.layout.width
            // Note: you should remove the following line in your code
            // Note: use width instead of scaledWidth in your code
            setPointerWidth(width / 3)
          }}
        >
          {/* <Animated.View style={animatedStyle} {...panResponder.panHandlers} /> */}
          {tabs.map((tab, index) => (
            <Tabs.Tab
              unstyled
              key={index}
              value={tab}
              alignItems="center"
              flex={1}
              flexBasis={0}
              flexShrink={1}
              pe={activeTabIndex === index ? 'none' : 'auto'}
              onPress={(type) => {
                chagenActiveTab(index)
              }}
            >
              <Text
                theme={index !== activeTabIndex ? 'alt1' : undefined}
                selectable={false}
                cursor="pointer"
                fontWeight={index !== activeTabIndex ? undefined : '600'}
              >
                {tab}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </View>
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
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      btlr={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      height={600}
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}
