/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 56v58.77c0 89.61-75.82 119.34-91 124.39a15.53 15.53 0 0 1-10 0c-15.2-5.05-91-34.78-91-124.39V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShieldFill))
export { Memo as IconShieldFill }
