/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFadersHorizontalBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M28 80a12 12 0 0 1 12-12h28a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m188 84h-32v-12a12 12 0 0 0-24 0v48a12 12 0 0 0 24 0v-12h32a12 12 0 0 0 0-24m-84 0H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24m-24-48a12 12 0 0 0 12-12V92h96a12 12 0 0 0 0-24h-96V56a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFadersHorizontalBold))
export { Memo as IconFadersHorizontalBold }
