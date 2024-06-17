/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSplitHorizontalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M108 48v160a4 4 0 0 1-8 0v-76H33.66l25.17 25.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L33.66 124H100V48a4 4 0 0 1 8 0m126.83 77.17-32-32a4 4 0 0 0-5.66 5.66L222.34 124H156V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-76h66.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSplitHorizontalThin))
export { Memo as IconSplitHorizontalThin }
