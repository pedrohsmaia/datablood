/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconListChecksFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M93.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L56 132.69l26.34-26.35a8 8 0 0 1 11.32 0m-11.32-64L56 68.69 45.66 58.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 128L56 196.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32M216 48h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m0 128h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m0-64h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconListChecksFill))
export { Memo as IconListChecksFill }
