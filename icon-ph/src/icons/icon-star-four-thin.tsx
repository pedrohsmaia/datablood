/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStarFourThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m228.13 116.77-63.46-23.08a3.94 3.94 0 0 1-2.36-2.36l-23.08-63.46a11.95 11.95 0 0 0-22.46 0L93.69 91.33a3.94 3.94 0 0 1-2.36 2.36l-63.46 23.08a11.95 11.95 0 0 0 0 22.46l63.46 23.08a3.94 3.94 0 0 1 2.36 2.36l23.08 63.46a11.95 11.95 0 0 0 22.46 0l23.08-63.46a3.94 3.94 0 0 1 2.36-2.36l63.46-23.08a11.95 11.95 0 0 0 0-22.46m-2.73 15-63.46 23.07a11.93 11.93 0 0 0-7.15 7.15l-23.07 63.41a4 4 0 0 1-7.44 0l-23.07-63.46a11.93 11.93 0 0 0-7.15-7.15L30.6 131.72a4 4 0 0 1 0-7.44l63.46-23.07a11.93 11.93 0 0 0 7.15-7.15l23.07-63.46a4 4 0 0 1 7.44 0l23.07 63.46a11.93 11.93 0 0 0 7.15 7.15l63.46 23.07a4 4 0 0 1 0 7.44Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStarFourThin))
export { Memo as IconStarFourThin }
