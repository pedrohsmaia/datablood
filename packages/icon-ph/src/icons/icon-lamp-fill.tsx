/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLampFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M246.68 156.4A8 8 0 0 1 240 160h-32v32a8 8 0 0 1-16 0v-32h-56v48h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-48H16a8 8 0 0 1-7.35-11.15l48-112A8 8 0 0 1 64 32h128a8 8 0 0 1 7.35 4.85l48 112a8 8 0 0 1-.67 7.55"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLampFill))
export { Memo as IconLampFill }
