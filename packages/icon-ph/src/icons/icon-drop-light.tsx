/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDropLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172.53 49.06a252.86 252.86 0 0 0-41.09-38 6 6 0 0 0-6.88 0 252.86 252.86 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M128 218a74.09 74.09 0 0 1-74-74c0-59.62 59-108.93 74-120.51 15 11.58 74 60.89 74 120.51a74.09 74.09 0 0 1-74 74m53.92-65A55.58 55.58 0 0 1 137 197.92a7 7 0 0 1-1 .08 6 6 0 0 1-1-11.92c17.38-2.92 32.13-17.68 35.08-35.08a6 6 0 1 1 11.84 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDropLight))
export { Memo as IconDropLight }
