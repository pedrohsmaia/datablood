/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPokerChipBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 144a36 36 0 1 1 36-36 36 36 0 0 1-36 36m33.06-86A59.51 59.51 0 0 0 140 69.21V44.87a83.55 83.55 0 0 1 38.28 15.88ZM116 69.21A59.51 59.51 0 0 0 94.94 78L77.72 60.75A83.55 83.55 0 0 1 116 44.87ZM78 94.94A59.51 59.51 0 0 0 69.21 116H44.87a83.59 83.59 0 0 1 15.88-38.28ZM69.21 140A59.51 59.51 0 0 0 78 161.06l-17.25 17.22A83.59 83.59 0 0 1 44.87 140Zm25.73 38a59.51 59.51 0 0 0 21.06 8.79v24.34a83.55 83.55 0 0 1-38.28-15.88Zm45.06 8.79a59.51 59.51 0 0 0 21.06-8.79l17.22 17.22A83.55 83.55 0 0 1 140 211.13Zm38-25.73a59.51 59.51 0 0 0 8.79-21.06h24.34a83.59 83.59 0 0 1-15.88 38.28Zm8.79-45.06A59.51 59.51 0 0 0 178 94.94l17.22-17.22A83.59 83.59 0 0 1 211.13 116Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPokerChipBold))
export { Memo as IconPokerChipBold }
