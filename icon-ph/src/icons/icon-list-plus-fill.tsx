/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconListPlusFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M32 72V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8m8 72h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8m112 32H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m80 8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconListPlusFill))
export { Memo as IconListPlusFill }
