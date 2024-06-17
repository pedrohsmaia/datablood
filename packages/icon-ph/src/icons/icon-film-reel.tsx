/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmReel = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 216h-40.64A103.95 103.95 0 1 0 128 232h96a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88 88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24 24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8 8 8 0 0 1-8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmReel))
export { Memo as IconFilmReel }
