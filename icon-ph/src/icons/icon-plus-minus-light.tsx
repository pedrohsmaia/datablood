/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlusMinusLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m204.24 60.24-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 0 1 8.48 8.48M66 112a6 6 0 0 0 12 0V78h34a6 6 0 0 0 0-12H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34Zm158 66h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlusMinusLight))
export { Memo as IconPlusMinusLight }
