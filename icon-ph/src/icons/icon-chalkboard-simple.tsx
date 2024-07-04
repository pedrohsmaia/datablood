/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChalkboardSimple = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M24 168V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v112a8 8 0 0 1-16 0V56H40v112a8 8 0 0 1-16 0m224 32a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h96v-24a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v24h48a8 8 0 0 1 8 8m-120-8h48v-16h-48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChalkboardSimple))
export { Memo as IconChalkboardSimple }
