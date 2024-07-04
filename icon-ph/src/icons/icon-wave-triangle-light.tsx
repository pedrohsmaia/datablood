/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveTriangleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m236.86 131.51-52 72a6 6 0 0 1-9.72 0L76 66.25l-47.14 65.26a6 6 0 1 1-9.72-7l52-72a6 6 0 0 1 9.72 0L180 189.75l47.14-65.26a6 6 0 0 1 9.72 7Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWaveTriangleLight))
export { Memo as IconWaveTriangleLight }
