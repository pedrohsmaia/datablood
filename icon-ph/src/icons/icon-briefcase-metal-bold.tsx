/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBriefcaseMetalBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 52h-36V40a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20M44 116h168v40H44Zm56-76a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm112 36v16H44V76ZM44 196v-16h168v16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBriefcaseMetalBold))
export { Memo as IconBriefcaseMetalBold }
