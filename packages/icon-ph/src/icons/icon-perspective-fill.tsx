/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPerspectiveFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 120H32V77.09a16 16 0 0 1 13.14-15.74l160-29.09A16 16 0 0 1 224 48ZM32 178.91a16 16 0 0 0 13.14 15.74l160 29.09a16.47 16.47 0 0 0 2.86.26 16 16 0 0 0 16-16v-72H32ZM240 120h-16v16h16a8 8 0 0 0 0-16m-224 0a8 8 0 0 0 0 16h16v-16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPerspectiveFill))
export { Memo as IconPerspectiveFill }
