/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSubtractBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M178 78A84 84 0 1 0 78 178 84 84 0 1 0 178 78m42 82a60.75 60.75 0 0 1-.38 6.65l-44-44a83.62 83.62 0 0 0 4-19.39A59.83 59.83 0 0 1 220 160M36 96a60 60 0 1 1 60 60 60.07 60.07 0 0 1-60-60m67.28 83.66a83.62 83.62 0 0 0 19.39-4l44 44a60.75 60.75 0 0 1-6.67.34 59.83 59.83 0 0 1-56.72-40.34m88.53 31.18-46.73-46.73a85 85 0 0 0 19-19l46.73 46.73a60.45 60.45 0 0 1-19 19"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSubtractBold))
export { Memo as IconSubtractBold }
