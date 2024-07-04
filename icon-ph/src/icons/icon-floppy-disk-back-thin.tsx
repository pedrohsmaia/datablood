/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFloppyDiskBackThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H91.31a12 12 0 0 0-8.48 3.51L39.52 82.83A11.9 11.9 0 0 0 36 91.31V208a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V91.31a4 4 0 0 1 1.17-2.82l43.31-43.32A4 4 0 0 1 91.31 44H172v36a4 4 0 0 1-4 4H88a4 4 0 0 0 0 8h80a12 12 0 0 0 12-12V44h28a4 4 0 0 1 4 4Zm-84-92a36 36 0 1 0 36 36 36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFloppyDiskBackThin))
export { Memo as IconFloppyDiskBackThin }
