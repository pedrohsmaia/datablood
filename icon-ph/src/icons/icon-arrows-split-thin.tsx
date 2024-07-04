/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsSplitThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m226.83 186.83-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L188 206.34v-68.68l-60-60-60 60v68.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L60 206.34V136a4 4 0 0 1 1.17-2.83L124 70.34V24a4 4 0 0 1 8 0v46.34l62.83 62.83A4 4 0 0 1 196 136v70.34l25.17-25.17a4 4 0 0 1 5.66 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsSplitThin))
export { Memo as IconArrowsSplitThin }
