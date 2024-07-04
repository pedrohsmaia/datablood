/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCropBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 192a12 12 0 0 1-12 12h-28v28a12 12 0 0 1-24 0v-28H64a12 12 0 0 1-12-12V76H24a12 12 0 0 1 0-24h28V24a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M104 76h76v76a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12h-88a12 12 0 0 0 0 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCropBold))
export { Memo as IconCropBold }
