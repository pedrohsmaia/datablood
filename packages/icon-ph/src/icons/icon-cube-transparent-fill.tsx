/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCubeTransparentFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M104 152v-48h48v48ZM32 53v95a4 4 0 0 0 4 4h52V99.31L38.83 50.14A4 4 0 0 0 32 53m188 51h-52v52.69l49.17 49.17A4 4 0 0 0 224 203v-95a4 4 0 0 0-4-4m-68-68a4 4 0 0 0-4-4H53a4 4 0 0 0-2.83 6.83L99.31 88H152Zm60.49 45.17-37.66-37.66a4 4 0 0 0-6.83 2.83V88h41.66a4 4 0 0 0 2.83-6.83M156.69 168H104v52a4 4 0 0 0 4 4h95a4 4 0 0 0 2.83-6.83Zm-113.18 6.83 37.66 37.66a4 4 0 0 0 6.83-2.83V168H46.34a4 4 0 0 0-2.83 6.83"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCubeTransparentFill))
export { Memo as IconCubeTransparentFill }
