/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H48a20 20 0 0 0-20 20v58.8c0 92.36 78.1 123 93.76 128.18a19.6 19.6 0 0 0 12.48 0C149.9 237.78 228 207.16 228 114.8V56a20 20 0 0 0-20-20m-4 78.8c0 73.56-60.53 99.53-76 105-15.47-5.42-76-31.39-76-104.95V60h152Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShieldBold))
export { Memo as IconShieldBold }
