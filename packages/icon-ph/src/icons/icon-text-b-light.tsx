/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextBLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M166.69 116.41A42 42 0 0 0 140 42H72a6 6 0 0 0-6 6v152a6 6 0 0 0 6 6h80a46 46 0 0 0 14.69-89.59M78 54h62a30 30 0 0 1 0 60H78Zm74 140H78v-68h74a34 34 0 0 1 0 68"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextBLight))
export { Memo as IconTextBLight }
