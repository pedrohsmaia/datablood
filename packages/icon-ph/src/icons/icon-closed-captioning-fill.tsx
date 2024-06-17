/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClosedCaptioningFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M116 162.64a40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 8 13.85m80 0a40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 8 13.85"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconClosedCaptioningFill))
export { Memo as IconClosedCaptioningFill }
