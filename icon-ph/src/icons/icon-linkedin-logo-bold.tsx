/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkedinLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H44V44h168Zm-100-36v-52a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 152v24a12 12 0 0 1-24 0v-24a16 16 0 0 0-32 0v24a12 12 0 0 1-24 0m-16-52v52a12 12 0 0 1-24 0v-52a12 12 0 0 1 24 0M68 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLinkedinLogoBold))
export { Memo as IconLinkedinLogoBold }
