/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlobeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m78.37 64h-35.43a142.39 142.39 0 0 0-20.26-45 88.37 88.37 0 0 1 55.69 45M128 40.11c12 13 21 29.55 26.37 47.89h-52.74C107 69.66 116 53.13 128 40.11M96 128a145.29 145.29 0 0 1 2-24h60a145.72 145.72 0 0 1 0 48H98a145.29 145.29 0 0 1-2-24m5.63 40h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89m49.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45m23.53-61a161.79 161.79 0 0 0 0-48h38.46a88.15 88.15 0 0 1 0 48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGlobeFill))
export { Memo as IconGlobeFill }
