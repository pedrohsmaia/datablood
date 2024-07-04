/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShareNetworkLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 162a37.91 37.91 0 0 0-28.3 12.67l-48.9-31.43a37.89 37.89 0 0 0 0-30.48l48.9-31.43a38 38 0 1 0-6.5-10.09l-48.9 31.43a38 38 0 1 0 0 50.66l48.9 31.43A38 38 0 1 0 176 162m0-132a26 26 0 1 1-26 26 26 26 0 0 1 26-26M64 154a26 26 0 1 1 26-26 26 26 0 0 1-26 26m112 72a26 26 0 1 1 26-26 26 26 0 0 1-26 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShareNetworkLight))
export { Memo as IconShareNetworkLight }
