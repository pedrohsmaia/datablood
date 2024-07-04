/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextOutdentLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M72 142a6 6 0 0 0 4.24-10.24L40.49 96l35.75-35.76a6 6 0 0 0-8.48-8.48l-40 40a6 6 0 0 0 0 8.48l40 40A6 6 0 0 0 72 142"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextOutdentLight))
export { Memo as IconTextOutdentLight }
