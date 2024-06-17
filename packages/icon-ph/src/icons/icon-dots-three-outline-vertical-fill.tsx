/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsThreeOutlineVerticalFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M156 128a28 28 0 1 1-28-28 28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28 28 28 0 0 0-28-28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsThreeOutlineVerticalFill))
export { Memo as IconDotsThreeOutlineVerticalFill }
