/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineUpLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M64 164a12 12 0 0 0 12-12V85l91.51 91.52a12 12 0 0 0 17-17L93 68h67a12 12 0 0 0 0-24H64a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineUpLeftBold))
export { Memo as IconArrowLineUpLeftBold }
