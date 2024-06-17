/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFloppyDiskBackBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H91.31a19.86 19.86 0 0 0-14.14 5.86L33.86 77.17A19.86 19.86 0 0 0 28 91.31V208a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V93l41-41h71v24h-64a12 12 0 0 0 0 24h68a20 20 0 0 0 20-20V52h16Zm-76-88a36 36 0 1 0 36 36 36 36 0 0 0-36-36m0 48a12 12 0 1 1 12-12 12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFloppyDiskBackBold))
export { Memo as IconFloppyDiskBackBold }
