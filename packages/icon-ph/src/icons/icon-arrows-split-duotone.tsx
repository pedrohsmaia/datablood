/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsSplitDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M32 184h64l-32 32Zm128 0 32 32 32-32Z" opacity={0.2} />
        <Path d="M231.39 180.94A8 8 0 0 0 224 176h-24v-40a8 8 0 0 0-2.34-5.66L136 68.69V24a8 8 0 0 0-16 0v44.69l-61.66 61.65A8 8 0 0 0 56 136v40H32a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 96 176H72v-36.69l56-56 56 56V176h-24a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 1.73-8.72M64 204.69 51.31 192h25.38Zm128 0L179.31 192h25.38Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsSplitDuotone))
export { Memo as IconArrowsSplitDuotone }
