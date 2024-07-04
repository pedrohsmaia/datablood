/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowLeftDownLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 64a6 6 0 0 1-6 6H86v123.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L74 193.51V64a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowLeftDownLight))
export { Memo as IconArrowElbowLeftDownLight }
