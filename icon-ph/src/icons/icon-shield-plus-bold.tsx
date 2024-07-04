/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldPlusBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H48a20 20 0 0 0-20 20v58.8c0 92.36 78.1 123 93.75 128.18a19.63 19.63 0 0 0 12.49 0C149.9 237.78 228 207.16 228 114.8V56a20 20 0 0 0-20-20m-4 78.8c0 73.55-60.52 99.52-76 105-15.47-5.42-76-31.39-76-104.95V60h152ZM84 128a12 12 0 0 1 12-12h20V96a12 12 0 0 1 24 0v20h20a12 12 0 0 1 0 24h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShieldPlusBold))
export { Memo as IconShieldPlusBold }
