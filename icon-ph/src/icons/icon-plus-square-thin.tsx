/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlusSquareThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40-80a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H88a4 4 0 0 1 0-8h36V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlusSquareThin))
export { Memo as IconPlusSquareThin }
