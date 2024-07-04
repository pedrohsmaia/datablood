/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconToggleRightLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140m0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116m0-96a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconToggleRightLight))
export { Memo as IconToggleRightLight }
