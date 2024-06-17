/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPrescriptionLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m180.49 188 23.75-23.76a6 6 0 0 0-8.48-8.48L172 179.51l-45.58-45.57A50 50 0 0 0 124 34H72a6 6 0 0 0-6 6v152a6 6 0 0 0 12 0v-58h31.51l54 54-23.75 23.76a6 6 0 1 0 8.48 8.48L172 196.49l23.76 23.75a6 6 0 0 0 8.48-8.48ZM78 46h46a38 38 0 0 1 0 76H78Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPrescriptionLight))
export { Memo as IconPrescriptionLight }
