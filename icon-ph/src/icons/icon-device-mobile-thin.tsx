/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceMobileThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20M68 60h120v136H68Zm12-32h96a12 12 0 0 1 12 12v12H68V40a12 12 0 0 1 12-12m96 200H80a12 12 0 0 1-12-12v-12h120v12a12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceMobileThin))
export { Memo as IconDeviceMobileThin }
