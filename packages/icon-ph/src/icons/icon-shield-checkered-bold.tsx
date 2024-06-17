/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldCheckeredBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H48a20 20 0 0 0-20 20v58.77c0 92.37 78.1 123 93.75 128.18a19.82 19.82 0 0 0 5.66 1h1.17a20 20 0 0 0 5.66-1C149.9 237.78 228 207.16 228 114.79V56a20 20 0 0 0-20-20m-4 78.79V116h-64V60h64ZM52 60h64v56H52v-1.21Zm2.59 80H116v74.72c-19.67-9.51-52.08-31.35-61.41-74.72M140 214.72V140h61.41c-9.33 43.37-41.74 65.21-61.41 74.72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShieldCheckeredBold))
export { Memo as IconShieldCheckeredBold }
