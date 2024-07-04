/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignTopSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204 32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m-32 40v152a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignTopSimpleThin))
export { Memo as IconAlignTopSimpleThin }
