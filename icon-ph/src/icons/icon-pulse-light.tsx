/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPulseLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M238 128a6 6 0 0 1-6 6h-28.29l-38.34 76.68A6 6 0 0 1 160 214h-.3a6 6 0 0 1-5.31-3.85L95.51 55.57l-34.05 74.91A6 6 0 0 1 56 134H24a6 6 0 0 1 0-12h28.14l38.4-84.48a6 6 0 0 1 11.07.34l59.13 155.24 33.89-67.78A6 6 0 0 1 200 122h32a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPulseLight))
export { Memo as IconPulseLight }
