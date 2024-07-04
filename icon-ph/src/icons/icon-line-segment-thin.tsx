/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLineSegmentThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M211.81 44.19a28 28 0 0 0-42.23 36.57l-88.82 88.82a28 28 0 0 0-36.57 2.63 28 28 0 1 0 42.23 3l88.82-88.82a28 28 0 0 0 36.57-42.23Zm-133.67 162a20 20 0 1 1 0-28.28 20 20 0 0 1 0 28.24Zm128-128a20 20 0 0 1-28.28 0 20 20 0 1 1 28.28 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLineSegmentThin))
export { Memo as IconLineSegmentThin }
