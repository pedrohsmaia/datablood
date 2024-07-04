/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStairsLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-48 116h50v28h-92v-28Zm6-12v-28h44v28ZM56 38h144a2 2 0 0 1 2 2v50h-50a6 6 0 0 0-6 6v34h-42a6 6 0 0 0-6 6v34H54V40a2 2 0 0 1 2-2m144 180H56a2 2 0 0 1-2-2v-34h148v34a2 2 0 0 1-2 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStairsLight))
export { Memo as IconStairsLight }
