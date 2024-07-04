/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStackSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m14 107.47 112 64a4 4 0 0 0 4 0l112-64a4 4 0 0 0 0-6.94l-112-64a4 4 0 0 0-4 0l-112 64a4 4 0 0 0 0 6.94m114-62.86L231.94 104 128 163.39 24.06 104ZM243.47 142a4 4 0 0 1-1.49 5.45l-112 64a4 4 0 0 1-4 0l-112-64a4 4 0 0 1 4-6.94l110 62.86 110-62.86a4 4 0 0 1 5.49 1.49"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStackSimpleThin))
export { Memo as IconStackSimpleThin }
