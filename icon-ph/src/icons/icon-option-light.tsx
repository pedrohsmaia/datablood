/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOptionLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 184a6 6 0 0 1-6 6h-63.06a13.92 13.92 0 0 1-12.52-7.74L96.84 79.11A2 2 0 0 0 95.06 78H32a6 6 0 0 1 0-12h63.06a13.92 13.92 0 0 1 12.52 7.74l51.58 103.15a2 2 0 0 0 1.78 1.11H224a6 6 0 0 1 6 6M152 78h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconOptionLight))
export { Memo as IconOptionLight }
