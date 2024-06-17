/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSyringeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m236.24 67.76-48-48a6 6 0 0 0-8.48 8.48L199.51 48 168 79.51l-35.76-35.75a6 6 0 1 0-8.48 8.48l7.75 7.76-85.41 85.41a13.94 13.94 0 0 0-4.1 9.9v50.2l-22.24 22.25a6 6 0 1 0 8.48 8.48L50.49 214h50.2a13.94 13.94 0 0 0 9.9-4.1L196 124.49l7.76 7.75a6 6 0 0 0 8.48-8.48L176.49 88 208 56.49l19.76 19.75a6 6 0 0 0 8.48-8.48M102.1 201.41a2 2 0 0 1-1.41.59H54v-46.69a2 2 0 0 1 .59-1.41L74 134.49l21.76 21.75a6 6 0 1 0 8.48-8.48L82.49 126 98 110.49l21.76 21.75a6 6 0 0 0 8.48-8.48L106.49 102 140 68.49 187.51 116Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSyringeLight))
export { Memo as IconSyringeLight }
