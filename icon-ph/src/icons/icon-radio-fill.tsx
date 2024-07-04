/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 72H86.51L194.3 39.67a8 8 0 0 0-4.6-15.33l-160 48A8 8 0 0 0 24 80v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M96 184H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m72 52a28 28 0 1 1 28-28 28 28 0 0 1-28 28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadioFill))
export { Memo as IconRadioFill }
