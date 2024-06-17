/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandPointingLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M188 90a25.87 25.87 0 0 0-14.59 4.49A26 26 0 0 0 134 78.1V44a26 26 0 0 0-52 0v87l-7.53-12.1a26 26 0 0 0-45 26.07l4.67 8.25c34 60 48.07 84.77 93.86 84.77a86.1 86.1 0 0 0 86-86V116a26 26 0 0 0-26-26m14 62a74.09 74.09 0 0 1-74 74c-38.8 0-50-19.83-83.42-78.69L39.89 139A14 14 0 0 1 45 119.88a13.87 13.87 0 0 1 7-1.88 14 14 0 0 1 12.15 7l.1.17 18.68 30A6 6 0 0 0 94 152V44a14 14 0 0 1 28 0v68a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0v20a6 6 0 0 0 12 0v-4a14 14 0 0 1 28 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHandPointingLight))
export { Memo as IconHandPointingLight }
