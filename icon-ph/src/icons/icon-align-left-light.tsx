/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignLeftLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M46 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m20 64V64a14 14 0 0 1 14-14h96a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14m12 0a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2V64a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2Zm152 48v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h136a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h136a2 2 0 0 0 2-2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignLeftLight))
export { Memo as IconAlignLeftLight }
