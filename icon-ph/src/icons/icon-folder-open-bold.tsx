/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderOpenBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M248.23 112.31A20 20 0 0 0 232 104h-12V88a20 20 0 0 0-20-20h-68l-26.66-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v144a12 12 0 0 0 12 12h179.1a12 12 0 0 0 11.33-8l28.49-81.47.06-.17a20 20 0 0 0-2.75-18.05M92 68l26.67 20a20.12 20.12 0 0 0 12 4H196v12H69.77a20 20 0 0 0-18.94 13.58L44 137.15V68Zm110.59 128H48.89l23.72-68h153.76Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderOpenBold))
export { Memo as IconFolderOpenBold }
