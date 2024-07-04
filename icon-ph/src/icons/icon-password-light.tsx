/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPasswordLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M46 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0m86.58 56.41L110 119.74V96a6 6 0 0 0-12 0v23.74l-22.58-7.33a6 6 0 1 0-3.71 11.41l22.58 7.33-14 19.21a6 6 0 1 0 9.7 7.06l14-19.21 14 19.21a6 6 0 0 0 9.7-7.06l-14-19.21 22.58-7.33a6 6 0 1 0-3.71-11.41Zm103.56 3.85a6 6 0 0 0-7.56-3.85L206 119.74V96a6 6 0 0 0-12 0v23.74l-22.58-7.33a6 6 0 1 0-3.71 11.41l22.58 7.33-13.95 19.21a6 6 0 1 0 9.7 7.06l14-19.21 14 19.21a6 6 0 0 0 9.7-7.06l-13.95-19.21 22.58-7.33a6 6 0 0 0 3.77-7.56"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPasswordLight))
export { Memo as IconPasswordLight }
