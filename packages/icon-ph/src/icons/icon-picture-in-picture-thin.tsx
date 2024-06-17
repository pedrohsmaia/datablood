/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPictureInPictureThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 52H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M36 192V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v60h-76a12 12 0 0 0-12 12v60H40a4 4 0 0 1-4-4m180 4h-76v-60a4 4 0 0 1 4-4h76v60a4 4 0 0 1-4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPictureInPictureThin))
export { Memo as IconPictureInPictureThin }
