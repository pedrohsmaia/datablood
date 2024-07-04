/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExcludeSquareBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12zm-63 44-32-32h22l32 32ZM52 69l32 32v22L52 91Zm39-17 32 32h-22L69 52Zm17 96v-40h40v40Zm64 7v-22l32 32v22Zm32-24-23-23h23Zm-56-56-23-23h23Zm-96 50 23 23H52Zm56 56 23 23h-23Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconExcludeSquareBold))
export { Memo as IconExcludeSquareBold }
