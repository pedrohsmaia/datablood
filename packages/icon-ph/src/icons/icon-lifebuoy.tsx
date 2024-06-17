/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLifebuoy = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.1 131.79a47.84 47.84 0 0 0 0-55.58l28.5-28.49a87.83 87.83 0 0 1 0 112.56ZM96 128a32 32 0 1 1 32 32 32 32 0 0 1-32-32m88.28-67.6-28.49 28.5a47.84 47.84 0 0 0-55.58 0L71.72 60.4a87.83 87.83 0 0 1 112.56 0M60.4 71.72l28.5 28.49a47.84 47.84 0 0 0 0 55.58l-28.5 28.49a87.83 87.83 0 0 1 0-112.56M71.72 195.6l28.49-28.5a47.84 47.84 0 0 0 55.58 0l28.49 28.5a87.83 87.83 0 0 1-112.56 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLifebuoy))
export { Memo as IconLifebuoy }
