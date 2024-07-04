/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserRectangleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-116 92a28 28 0 1 1 28 28 28 28 0 0 1-28-28m28 52a59.66 59.66 0 0 1 40.85 16h-81.7A59.66 59.66 0 0 1 128 180m84 16h-12.44A83.46 83.46 0 0 0 165 164.5a52 52 0 1 0-74 0A83.46 83.46 0 0 0 56.44 196H44V60h168Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserRectangleBold))
export { Memo as IconUserRectangleBold }
