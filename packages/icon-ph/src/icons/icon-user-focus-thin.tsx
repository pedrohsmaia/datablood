/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserFocusThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 48v28a4 4 0 0 1-8 0V48a4 4 0 0 0-4-4h-28a4 4 0 0 1 0-8h28a12 12 0 0 1 12 12m-4 128a4 4 0 0 0-4 4v28a4 4 0 0 1-4 4h-28a4 4 0 0 0 0 8h28a12 12 0 0 0 12-12v-28a4 4 0 0 0-4-4M76 212H48a4 4 0 0 1-4-4v-28a4 4 0 0 0-8 0v28a12 12 0 0 0 12 12h28a4 4 0 0 0 0-8M40 80a4 4 0 0 0 4-4V48a4 4 0 0 1 4-4h28a4 4 0 0 0 0-8H48a12 12 0 0 0-12 12v28a4 4 0 0 0 4 4m136 92a4 4 0 0 1-3.2-1.6 56 56 0 0 0-89.6 0 4 4 0 1 1-6.4-4.8 63.65 63.65 0 0 1 32.5-22.85 36 36 0 1 1 37.4 0 63.65 63.65 0 0 1 32.5 22.85 4 4 0 0 1-3.2 6.4m-48-32a28 28 0 1 0-28-28 28 28 0 0 0 28 28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserFocusThin))
export { Memo as IconUserFocusThin }
