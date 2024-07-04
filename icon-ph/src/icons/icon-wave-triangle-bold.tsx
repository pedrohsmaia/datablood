/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveTriangleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m241.73 135-52 72a12 12 0 0 1-19.46 0L76 76.5 33.73 135a12 12 0 1 1-19.46-14l52-72a12 12 0 0 1 19.46 0L180 179.5l42.27-58.5a12 12 0 1 1 19.46 14"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWaveTriangleBold))
export { Memo as IconWaveTriangleBold }
