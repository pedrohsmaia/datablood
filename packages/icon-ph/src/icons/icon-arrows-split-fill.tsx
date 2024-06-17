/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsSplitFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m229.66 189.66-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 160 176h24v-36.69l-56-56-56 56V176h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 32 176h24v-40a8 8 0 0 1 2.34-5.66L120 68.69V24a8 8 0 0 1 16 0v44.69l61.66 61.65A8 8 0 0 1 200 136v40h24a8 8 0 0 1 5.66 13.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsSplitFill))
export { Memo as IconArrowsSplitFill }
