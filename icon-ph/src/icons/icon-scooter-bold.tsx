/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScooterBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 132h-.68l-13.38-40.11-18.56-55.68A12 12 0 0 0 168 28h-32a12 12 0 0 0 0 24h23.35l13.77 41.3-55 70.7H83.2a40 40 0 1 0-2.55 24H124a12 12 0 0 0 9.47-4.63l48.77-62.7 6.32 19A40 40 0 1 0 212 132M44 188a16 16 0 1 1 16-16 16 16 0 0 1-16 16m168 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScooterBold))
export { Memo as IconScooterBold }
