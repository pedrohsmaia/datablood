/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaintBrushHouseholdBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M233.47 22.53a36 36 0 0 0-50.91 0c-.16.15-.3.31-.45.47L130 81l-6.22-6.21a28 28 0 0 0-39.6 0L7.52 151.51a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17 0l76.7-76.7a28 28 0 0 0 0-39.6L175 126l58-52.08c.16-.15.32-.29.47-.45a36 36 0 0 0 0-50.94M96 223l-11-11 19.51-19.52a12 12 0 0 0-17-17L68 195l-7-7 19.51-19.52a12 12 0 0 0-17-17L44 171l-11-11 39-39 63 63ZM216.69 56.28l-60.9 54.65a20 20 0 0 0-.78 29l9.2 9.2a4 4 0 0 1 0 5.66L152 167l-63-63 12.2-12.2a4 4 0 0 1 5.66 0L116 101a20 20 0 0 0 29-.78l54.65-60.9a12 12 0 0 1 17 17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaintBrushHouseholdBold))
export { Memo as IconPaintBrushHouseholdBold }
