/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBracketsAngleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M103 180a8 8 0 0 1-13.95 8l-32-56a8 8 0 0 1 0-7.94l32-56A8 8 0 0 1 103 76l-29.79 52Zm96-48-32 56a8 8 0 0 1-13.9-7.94l29.74-52L153.05 76A8 8 0 1 1 167 68l32 56a8 8 0 0 1 0 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBracketsAngleFill))
export { Memo as IconBracketsAngleFill }
