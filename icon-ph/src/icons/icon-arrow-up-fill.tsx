/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUpFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M207.39 115.06A8 8 0 0 1 200 120h-64v96a8 8 0 0 1-16 0v-96H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0l72 72a8 8 0 0 1 1.73 8.72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUpFill))
export { Memo as IconArrowUpFill }
