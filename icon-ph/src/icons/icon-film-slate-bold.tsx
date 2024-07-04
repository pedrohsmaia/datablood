/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmSlateBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 100h-83.08l78.14-20.63a12 12 0 0 0 8.52-14.75l-8.16-30a19.94 19.94 0 0 0-24.3-13.95L34.79 60.87a19.74 19.74 0 0 0-12.14 9.27 19.48 19.48 0 0 0-1.95 15L28 112v88a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-88a12 12 0 0 0-12-12m-91.11-38.09 18.29 10.56-25.95 6.85-18.29-10.56Zm64.45-17 3.91 14.35-17.13 4.52-18.29-10.57ZM66 77.46 84.29 88l-35.4 9.35L45 83ZM204 196H52v-72h152Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmSlateBold))
export { Memo as IconFilmSlateBold }
