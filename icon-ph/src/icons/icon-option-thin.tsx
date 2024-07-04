/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOptionThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 184a4 4 0 0 1-4 4h-63.06a11.94 11.94 0 0 1-10.73-6.63L98.63 78.21A4 4 0 0 0 95.06 76H32a4 4 0 0 1 0-8h63.06a11.94 11.94 0 0 1 10.73 6.63l51.58 103.16a4 4 0 0 0 3.57 2.21H224a4 4 0 0 1 4 4M152 76h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconOptionThin))
export { Memo as IconOptionThin }
