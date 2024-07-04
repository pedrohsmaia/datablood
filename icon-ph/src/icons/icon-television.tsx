/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTelevision = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69 85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M40 80h104v120H40Zm176 120h-56V80h56zm-16-84a12 12 0 1 1-12-12 12 12 0 0 1 12 12m0 48a12 12 0 1 1-12-12 12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTelevision))
export { Memo as IconTelevision }
