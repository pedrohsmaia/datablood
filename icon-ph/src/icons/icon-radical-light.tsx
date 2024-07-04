/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadicalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M238 72v24a6 6 0 0 1-12 0V78H124.16L77.62 202.11a6 6 0 0 1-11.24 0l-48-128a6 6 0 0 1 11.24-4.22L72 182.91l42.38-113A6 6 0 0 1 120 66h112a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadicalLight))
export { Memo as IconRadicalLight }
