/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextTLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M206 56v32a6 6 0 0 1-12 0V62h-60v132h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26V62H62v26a6 6 0 0 1-12 0V56a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextTLight))
export { Memo as IconTextTLight }
