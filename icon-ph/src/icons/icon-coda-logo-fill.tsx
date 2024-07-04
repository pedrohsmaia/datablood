/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodaLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 128a40 40 0 0 0 40 40h.32c7.83.3 14-1.46 21.24-6.11A12 12 0 0 1 216 172v36a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16v36a12 12 0 0 1-18.47 10.1A40.23 40.23 0 0 0 136 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodaLogoFill))
export { Memo as IconCodaLogoFill }
