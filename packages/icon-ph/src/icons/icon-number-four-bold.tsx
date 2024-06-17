/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberFourBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M188 152a12 12 0 0 1-12 12h-12v44a12 12 0 0 1-24 0v-44H72a12 12 0 0 1-11.3-16l40-112a12 12 0 1 1 22.6 8L89 140h51V96a12 12 0 0 1 24 0v44h12a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberFourBold))
export { Memo as IconNumberFourBold }
