/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGridNineThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 52H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-116 96v-40h56v40Zm56 8v40h-56v-40ZM36 108h56v40H36Zm64-8V60h56v40Zm64 8h56v40h-56Zm56-44v36h-56V60h52a4 4 0 0 1 4 4M40 60h52v40H36V64a4 4 0 0 1 4-4m-4 132v-36h56v40H40a4 4 0 0 1-4-4m180 4h-52v-40h56v36a4 4 0 0 1-4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGridNineThin))
export { Memo as IconGridNineThin }
