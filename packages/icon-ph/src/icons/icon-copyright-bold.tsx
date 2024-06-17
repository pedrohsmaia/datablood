/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCopyrightBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m41.59-52.79a52 52 0 1 1 0-62.43 12 12 0 1 1-19.18 14.42 28 28 0 1 0 0 33.6 12 12 0 1 1 19.18 14.41"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCopyrightBold))
export { Memo as IconCopyrightBold }
