/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareHalfThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m-68 72h72v24h-72Zm0-8V84h72v24Zm0 40h72v24h-72Zm72-92v20h-72V52h68a4 4 0 0 1 4 4M52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4m148 4h-68v-24h72v20a4 4 0 0 1-4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSquareHalfThin))
export { Memo as IconSquareHalfThin }
