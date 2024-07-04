/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSliders = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M64 105V40a8 8 0 0 0-16 0v65a32 32 0 0 0 0 62v49a8 8 0 0 0 16 0v-49a32 32 0 0 0 0-62m-8 47a16 16 0 1 1 16-16 16 16 0 0 1-16 16m80-95V40a8 8 0 0 0-16 0v17a32 32 0 0 0 0 62v97a8 8 0 0 0 16 0v-97a32 32 0 0 0 0-62m-8 47a16 16 0 1 1 16-16 16 16 0 0 1-16 16m104 64a32.06 32.06 0 0 0-24-31V40a8 8 0 0 0-16 0v97a32 32 0 0 0 0 62v17a8 8 0 0 0 16 0v-17a32.06 32.06 0 0 0 24-31m-32 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSliders))
export { Memo as IconSliders }
