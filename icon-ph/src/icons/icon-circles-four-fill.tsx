/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesFourFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M120 80a40 40 0 1 1-40-40 40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40 40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40 40 40 0 0 0-40-40m96 0a40 40 0 1 0 40 40 40 40 0 0 0-40-40"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesFourFill))
export { Memo as IconCirclesFourFill }
