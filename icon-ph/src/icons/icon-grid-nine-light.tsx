/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGridNineLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m-114 96v-36h52v36Zm52 12v36h-52v-36ZM38 110h52v36H38Zm64-12V62h52v36Zm64 12h52v36h-52Zm52-46v34h-52V62h50a2 2 0 0 1 2 2M40 62h50v36H38V64a2 2 0 0 1 2-2m-2 130v-34h52v36H40a2 2 0 0 1-2-2m178 2h-50v-36h52v34a2 2 0 0 1-2 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGridNineLight))
export { Memo as IconGridNineLight }
