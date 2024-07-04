/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrashThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 52h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8M92 40a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm104 168a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136Zm-88-104v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m48 0v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrashThin))
export { Memo as IconTrashThin }
