/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareHalfBottomThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4m52 80v72H84v-72Zm8 0h24v72h-24Zm32 0h24v72h-24Zm-96 68v-68h24v72H56a4 4 0 0 1-4-4m148 4h-20v-72h24v68a4 4 0 0 1-4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSquareHalfBottomThin))
export { Memo as IconSquareHalfBottomThin }
