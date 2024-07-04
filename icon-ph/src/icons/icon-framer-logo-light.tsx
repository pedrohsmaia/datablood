/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFramerLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M206 96V32a6 6 0 0 0-6-6H56a6 6 0 0 0-4 10.48L112.22 90H56a6 6 0 0 0-6 6v64a6 6 0 0 0 1.76 4.24l72 72A6 6 0 0 0 134 232v-66h66a6 6 0 0 0 4-10.48L143.78 102H200a6 6 0 0 0 6-6m-21.78 58H128a6 6 0 0 0-6 6v57.51l-60-60V102h63.72ZM194 90h-63.72l-58.5-52H194Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFramerLogoLight))
export { Memo as IconFramerLogoLight }
