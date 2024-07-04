/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGooglePodcastsLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m243.32 116.68-104-104a16 16 0 0 0-22.64 0l-104 104a16 16 0 0 0 0 22.64l104 104a16 16 0 0 0 22.64 0l104-104a16 16 0 0 0 0-22.64M56 136a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm40 40a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 88a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm0-112a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm40 120a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm0-80a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 40a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGooglePodcastsLogoFill))
export { Memo as IconGooglePodcastsLogoFill }
