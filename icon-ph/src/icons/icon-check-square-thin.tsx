/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCheckSquareThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M170.83 101.17a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0M220 48v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCheckSquareThin))
export { Memo as IconCheckSquareThin }
