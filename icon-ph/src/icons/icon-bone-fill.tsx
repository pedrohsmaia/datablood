/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBoneFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M231.12 107.72a35.91 35.91 0 0 1-46.19 6.8.14.14 0 0 0-.1 0l-70.35 70.36v.08a36 36 0 1 1-66.37 22.92 36 36 0 1 1 22.92-66.37.14.14 0 0 0 .1 0l70.35-70.36v-.08a36 36 0 1 1 66.37-22.92 36 36 0 0 1 23.27 59.57"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBoneFill))
export { Memo as IconBoneFill }
