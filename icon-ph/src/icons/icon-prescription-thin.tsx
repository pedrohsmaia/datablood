/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPrescriptionThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m177.66 188 25.17-25.17a4 4 0 0 0-5.66-5.66L172 182.34 121.66 132H124a48 48 0 0 0 0-96H72a4 4 0 0 0-4 4v152a4 4 0 0 0 8 0v-60h34.34l56 56-25.17 25.17a4 4 0 0 0 5.66 5.66L172 193.66l25.17 25.17a4 4 0 0 0 5.66-5.66ZM76 44h48a40 40 0 0 1 0 80H76Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPrescriptionThin))
export { Memo as IconPrescriptionThin }
