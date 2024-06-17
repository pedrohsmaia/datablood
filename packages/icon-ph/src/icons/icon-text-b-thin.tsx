/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextBThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M162.27 117.21A40 40 0 0 0 140 44H72a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h80a44 44 0 0 0 10.27-86.79M76 52h64a32 32 0 0 1 0 64H76Zm76 144H76v-72h76a36 36 0 0 1 0 72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextBThin))
export { Memo as IconTextBThin }
