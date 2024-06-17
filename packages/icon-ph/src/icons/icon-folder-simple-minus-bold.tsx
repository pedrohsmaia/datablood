/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderSimpleMinusBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M104 132h48a12 12 0 0 1 0 24h-48a12 12 0 0 1 0-24m132-44v112.89A19.13 19.13 0 0 1 216.89 220H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20m-24 4h-81.33a20.12 20.12 0 0 1-12-4L92 68H44v128h168Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderSimpleMinusBold))
export { Memo as IconFolderSimpleMinusBold }
