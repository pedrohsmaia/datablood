/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextOutdentBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 128a12 12 0 0 1-12 12h-96a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12M120 76h96a12 12 0 0 0 0-24h-96a12 12 0 0 0 0 24m96 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M72 148a12 12 0 0 0 8.49-20.49L49 96l31.49-31.52a12 12 0 0 0-17-17l-40 40a12 12 0 0 0 0 17l40 40A12 12 0 0 0 72 148"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextOutdentBold))
export { Memo as IconTextOutdentBold }
