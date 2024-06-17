/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHFourBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M256 176a12 12 0 0 1-12 12v20a12 12 0 0 1-24 0v-20h-36a12 12 0 0 1-11.38-15.79l24-72a12 12 0 0 1 22.76 7.58L200.65 164H220v-20a12 12 0 0 1 24 0v20a12 12 0 0 1 12 12M144 44a12 12 0 0 0-12 12v48H52V56a12 12 0 0 0-24 0v120a12 12 0 0 0 24 0v-48h80v48a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHFourBold))
export { Memo as IconTextHFourBold }
