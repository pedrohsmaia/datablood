/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTruckFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m247.43 117-14-35a15.93 15.93 0 0 0-14.85-10H184v-8a8 8 0 0 0-8-8H24A16 16 0 0 0 8 72v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8.13 8.13 0 0 0-.57-3M72 208a16 16 0 1 1 16-16 16 16 0 0 1-16 16m-48-72V72h144v64Zm160 72a16 16 0 1 1 16-16 16 16 0 0 1-16 16m0-96V88h34.58l9.6 24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTruckFill))
export { Memo as IconTruckFill }
