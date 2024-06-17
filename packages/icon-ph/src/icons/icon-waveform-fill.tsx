/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveformFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M64 96v64a8 8 0 0 1-8 8h-8a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8m32-72h-8a8 8 0 0 0-8 8v192a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m40 32h-8a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m40 32h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m40-16h-8a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWaveformFill))
export { Memo as IconWaveformFill }
