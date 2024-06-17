/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFadersHorizontalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M36 80a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m180 92h-44v-20a4 4 0 0 0-8 0v48a4 4 0 0 0 8 0v-20h44a4 4 0 0 0 0-8m-80 0H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m-32-64a4 4 0 0 0 4-4V84h108a4 4 0 0 0 0-8H108V56a4 4 0 0 0-8 0v48a4 4 0 0 0 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFadersHorizontalThin))
export { Memo as IconFadersHorizontalThin }
