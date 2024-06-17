/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrademarkBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m64-104v40a12 12 0 0 1-24 0v-13.91l-8.19 7a12 12 0 0 1-15.62 0l-8.19-7V148a12 12 0 0 1-24 0v-28h-12v28a12 12 0 0 1-24 0v-28h-4a12 12 0 0 1 0-24h52a12 12 0 0 1 7.81 2.89L152 116.2l20.19-17.31A12 12 0 0 1 192 108"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrademarkBold))
export { Memo as IconTrademarkBold }
