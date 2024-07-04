/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignTopSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 32a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12m-32 48v144a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20m-24 4h-56v136h56Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignTopSimpleBold))
export { Memo as IconAlignTopSimpleBold }
