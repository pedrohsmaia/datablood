/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleFourFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m32 128h-8v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1-7.59-10.53l24-72a8 8 0 0 1 15.18 5.06L107.1 136H136v-24a8 8 0 0 1 16 0v24h8a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleFourFill))
export { Memo as IconNumberCircleFourFill }
