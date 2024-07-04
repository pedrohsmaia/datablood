/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconImagesThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M68 56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v72.4l-16.89-16.89a12 12 0 0 0-17 0l-22.83 22.83-46.79-46.83a12 12 0 0 0-17 0L68 119Zm120 144a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h20v84a12 12 0 0 0 12 12h116Zm28-28H72a4 4 0 0 1-4-4v-37.66l37.17-37.17a4 4 0 0 1 5.66 0l49.66 49.66a4 4 0 0 0 5.65 0l25.66-25.66a4 4 0 0 1 5.66 0L220 139.71V168a4 4 0 0 1-4 4m-52-88a8 8 0 1 1 8 8 8 8 0 0 1-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconImagesThin))
export { Memo as IconImagesThin }
