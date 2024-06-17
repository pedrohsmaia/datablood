/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBaseballThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m67.31 162.64a90.16 90.16 0 0 1-4.46-5.14 4 4 0 0 0-6.24 5c1.58 2 3.26 3.9 5 5.76a91.82 91.82 0 0 1-123.22 0c1.74-1.86 3.42-3.78 5-5.76a4 4 0 0 0-6.24-5 90.16 90.16 0 0 1-4.46 5.14 91.81 91.81 0 0 1 0-125.28 90.16 90.16 0 0 1 4.46 5.14 4 4 0 0 0 6.24-5c-1.58-2-3.26-3.9-5-5.76a91.82 91.82 0 0 1 123.22 0 97.247 97.247 0 0 0-5 5.76 4 4 0 1 0 6.24 5 90.16 90.16 0 0 1 4.46-5.14 91.81 91.81 0 0 1 0 125.28m-103.37-46a98.57 98.57 0 0 1-4.3 16.67 4 4 0 0 1-3.78 2.69 3.88 3.88 0 0 1-1.33-.23 4 4 0 0 1-2.44-5.1 92.07 92.07 0 0 0 4-15.33 4 4 0 0 1 7.88 1.32Zm0-33.32a4 4 0 0 1-3.28 4.6 3.77 3.77 0 0 1-.66.08 4 4 0 0 1-3.94-3.34 92.07 92.07 0 0 0-4-15.33 4 4 0 0 1 7.55-2.66 98.57 98.57 0 0 1 4.33 16.67Zm84 47.33a4 4 0 0 1-2.44 5.1 3.88 3.88 0 0 1-1.33.23 4 4 0 0 1-3.78-2.67 98.57 98.57 0 0 1-4.3-16.67 4 4 0 0 1 7.88-1.32 92.07 92.07 0 0 0 3.94 15.35Zm0-61.34a92.07 92.07 0 0 0-4 15.33A4 4 0 0 1 168 116a3.68 3.68 0 0 1-.66-.06 4 4 0 0 1-3.28-4.6 98.57 98.57 0 0 1 4.3-16.67 4 4 0 0 1 7.55 2.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBaseballThin))
export { Memo as IconBaseballThin }
