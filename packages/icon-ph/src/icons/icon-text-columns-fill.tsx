/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextColumnsFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M120 184v8a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8m-8-88H40a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8m0 40H40a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8m0-80H40a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8m104 40h-72a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8m0 80h-72a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8m0-120h-72a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8m0 80h-72a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextColumnsFill))
export { Memo as IconTextColumnsFill }
