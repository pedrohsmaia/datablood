/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStampFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 224a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-16-96h-56.43l15.71-73.29A32 32 0 0 0 136 16h-16a32 32 0 0 0-31.28 38.71L104.43 128H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStampFill))
export { Memo as IconStampFill }
