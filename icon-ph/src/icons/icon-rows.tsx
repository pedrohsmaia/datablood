/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRows = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 136H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16m0 56H48v-40h160zm0-144H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 56H48V64h160z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRows))
export { Memo as IconRows }
