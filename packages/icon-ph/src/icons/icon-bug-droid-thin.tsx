/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBugDroidThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m186.17 43.49 16.66-16.66a4 4 0 1 0-5.66-5.66l-17 17a83.72 83.72 0 0 0-104.26 0l-17-17a4 4 0 0 0-5.66 5.66l16.58 16.66A83.75 83.75 0 0 0 44 104v40a84 84 0 0 0 168 0v-40a83.75 83.75 0 0 0-25.83-60.51M128 28a76.08 76.08 0 0 1 76 76v12H52v-12a76.08 76.08 0 0 1 76-76m0 192a76.08 76.08 0 0 1-76-76v-20h152v20a76.08 76.08 0 0 1-76 76m20-136a8 8 0 1 1 8 8 8 8 0 0 1-8-8m-56 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBugDroidThin))
export { Memo as IconBugDroidThin }
