/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTentThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m251.66 198.38-64-144A4 4 0 0 0 184 52H72a4 4 0 0 0-3.63 2.35v.06l-64 143.93A4 4 0 0 0 8 204h240a4 4 0 0 0 3.66-5.62M68 74.85V196H14.16ZM76 196V74.85L129.84 196Zm62.6 0L78.16 60H181.4l60.44 136Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTentThin))
export { Memo as IconTentThin }
