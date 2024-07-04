/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTableThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4M36 108h48v40H36Zm56 0h128v40H92Zm128-48v40H36V60ZM36 192v-36h48v40H40a4 4 0 0 1-4-4m180 4H92v-40h128v36a4 4 0 0 1-4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTableThin))
export { Memo as IconTableThin }
