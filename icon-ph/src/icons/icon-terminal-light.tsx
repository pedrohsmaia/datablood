/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTerminalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m116 132.48-72 64a6 6 0 0 1-8-9L103 128 36 68.49a6 6 0 0 1 8-9l72 64a6 6 0 0 1 0 9ZM216 186h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTerminalLight))
export { Memo as IconTerminalLight }
