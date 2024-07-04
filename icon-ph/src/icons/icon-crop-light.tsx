/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCropLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M238 192a6 6 0 0 1-6 6h-34v34a6 6 0 0 1-12 0v-34H64a6 6 0 0 1-6-6V70H24a6 6 0 0 1 0-12h34V24a6 6 0 0 1 12 0v162h162a6 6 0 0 1 6 6M96 70h90v90a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCropLight))
export { Memo as IconCropLight }
