/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBracketsRound = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M40 128c0 58.29 34.67 80.25 36.15 81.16a8 8 0 0 1-8.27 13.7C66.09 221.78 24 195.75 24 128s42.09-93.78 43.88-94.86a8 8 0 0 1 8.26 13.7C74.54 47.83 40 69.82 40 128m148.12-94.86a8 8 0 0 0-8.27 13.7C181.33 47.75 216 69.71 216 128s-34.67 80.25-36.12 81.14a8 8 0 0 0 8.24 13.72C189.91 221.78 232 195.75 232 128s-42.09-93.78-43.88-94.86"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBracketsRound))
export { Memo as IconBracketsRound }
