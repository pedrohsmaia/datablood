/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBirdBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 72a16 16 0 1 1-16-16 16 16 0 0 1 16 16m68 8a12 12 0 0 1-5.34 10L220 102.42V120a108.12 108.12 0 0 1-108 108H12a12 12 0 0 1-9.52-19.3L92 91.93V76a64 64 0 0 1 124.58-20.71L238.66 70A12 12 0 0 1 244 80m-33.63 0-10.69-7.13a11.94 11.94 0 0 1-5-7A40 40 0 0 0 116 76v20a12 12 0 0 1-2.48 7.3L36.32 204H112a84.09 84.09 0 0 0 84-84V96a12 12 0 0 1 5.34-10Zm-81.74 46.48a12 12 0 0 0-16.82 2.22l-30.67 40a12 12 0 0 0 19 14.6l30.67-40a12 12 0 0 0-2.18-16.82"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBirdBold))
export { Memo as IconBirdBold }
