/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBugDroid = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m191.83 43.48 13.83-13.82a8 8 0 1 0-11.32-11.32L179.79 32.9a87.81 87.81 0 0 0-103.58 0L61.66 18.34a8 8 0 0 0-11.32 11.32l13.83 13.82A87.72 87.72 0 0 0 40 104v40a88 88 0 0 0 176 0v-40a87.72 87.72 0 0 0-24.17-60.52M128 32a72.08 72.08 0 0 1 72 72v8H56v-8a72.08 72.08 0 0 1 72-72m0 184a72.08 72.08 0 0 1-72-72v-16h144v16a72.08 72.08 0 0 1-72 72m16-132a12 12 0 1 1 12 12 12 12 0 0 1-12-12m-56 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBugDroid))
export { Memo as IconBugDroid }
