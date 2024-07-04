/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBellSimpleRingingFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m59.39-163.68a111.36 111.36 0 0 0-39.12-43.08 8 8 0 1 0-8.54 13.53 94.13 94.13 0 0 1 33.46 36.91 8 8 0 0 0 14.2-7.36M35.71 72a8 8 0 0 0 7.1-4.32 94.13 94.13 0 0 1 33.46-36.91 8 8 0 1 0-8.54-13.53 111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72M208 112a80 80 0 0 0-160 0c0 26.28-4.78 48.39-13.81 63.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.79-24.06C212.78 160.38 208 138.27 208 112"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBellSimpleRingingFill))
export { Memo as IconBellSimpleRingingFill }
