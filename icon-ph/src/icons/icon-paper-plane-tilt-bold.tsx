/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaperPlaneTiltBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230.14 25.86a20 20 0 0 0-19.57-5.11l-.22.07L18.44 79a20 20 0 0 0-3 37.28l84.32 40 40 84.32a19.81 19.81 0 0 0 18 11.44c.57 0 1.15 0 1.73-.07A19.82 19.82 0 0 0 177 237.56l58.18-191.91a1.42 1.42 0 0 0 .07-.22 20 20 0 0 0-5.11-19.57M157 220.92l-33.72-71.19 45.25-45.25a12 12 0 0 0-17-17l-45.25 45.25L35.08 99 210 46Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaperPlaneTiltBold))
export { Memo as IconPaperPlaneTiltBold }
