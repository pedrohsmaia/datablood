/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPictureInPictureDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 64v64h-80a8 8 0 0 0-8 8v64H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M40 64h176v56h-72a16 16 0 0 0-16 16v56H40Zm176 128h-72v-56h72z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPictureInPictureDuotone))
export { Memo as IconPictureInPictureDuotone }
