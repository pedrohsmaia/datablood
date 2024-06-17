/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlayThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230.32 117.9 86.24 29.79a11.91 11.91 0 0 0-12.17-.23A11.71 11.71 0 0 0 68 39.89v176.22a11.71 11.71 0 0 0 6.07 10.33 11.91 11.91 0 0 0 12.17-.23l144.08-88.11a11.82 11.82 0 0 0 0-20.2m-4.18 13.37L82.06 219.39a4 4 0 0 1-4.07.07 3.77 3.77 0 0 1-2-3.35V39.89a3.77 3.77 0 0 1 2-3.35 4 4 0 0 1 4.07.07l144.08 88.12a3.8 3.8 0 0 1 0 6.54"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlayThin))
export { Memo as IconPlayThin }
