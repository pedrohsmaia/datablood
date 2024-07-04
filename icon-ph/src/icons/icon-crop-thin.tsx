/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCropThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 192a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H64a4 4 0 0 1-4-4V68H24a4 4 0 0 1 0-8h36V24a4 4 0 0 1 8 0v164h164a4 4 0 0 1 4 4M96 68h92v92a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4H96a4 4 0 0 0 0 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCropThin))
export { Memo as IconCropThin }
