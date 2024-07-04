/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberNineLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 42a54 54 0 1 0 19.94 104.17l-33.17 58.88a6 6 0 1 0 10.46 5.89l49.54-88A54 54 0 0 0 128 42m0 96a42 42 0 1 1 42-42 42 42 0 0 1-42 42"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberNineLight))
export { Memo as IconNumberNineLight }
