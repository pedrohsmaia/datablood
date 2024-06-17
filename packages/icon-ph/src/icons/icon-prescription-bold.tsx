/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPrescriptionBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m189 188 19.52-19.51a12 12 0 0 0-17-17L172 171l-33.07-33A56 56 0 0 0 124 28H72a12 12 0 0 0-12 12v152a12 12 0 0 0 24 0v-52h23l48 48-19.52 19.51a12 12 0 0 0 17 17L172 205l19.51 19.52a12 12 0 0 0 17-17ZM84 52h40a32 32 0 0 1 0 64H84Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPrescriptionBold))
export { Memo as IconPrescriptionBold }
