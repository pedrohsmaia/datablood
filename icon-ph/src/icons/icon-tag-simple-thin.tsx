/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTagSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M243.33 125.78 197.7 57.34a12 12 0 0 0-10-5.34H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h147.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44m-52.28 68.44a4 4 0 0 1-3.33 1.78H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h147.72a4 4 0 0 1 3.33 1.78L235.19 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTagSimpleThin))
export { Memo as IconTagSimpleThin }
