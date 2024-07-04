/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFadersFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 120v96a8 8 0 0 1-16 0v-96a8 8 0 0 1 16 0m64 72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m24-48h-16V40a8 8 0 0 0-16 0v104h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8M56 160a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m24-48H64V40a8 8 0 0 0-16 0v72H32a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m72-48h-16V40a8 8 0 0 0-16 0v24h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFadersFill))
export { Memo as IconFadersFill }
