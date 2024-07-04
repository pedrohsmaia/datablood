/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowCircleUpLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m40.49-60.49a12 12 0 0 1-17 17L108 125v19a12 12 0 0 1-24 0V96a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-19Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowCircleUpLeftBold))
export { Memo as IconArrowCircleUpLeftBold }
