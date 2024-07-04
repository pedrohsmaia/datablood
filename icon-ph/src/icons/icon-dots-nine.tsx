/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsNine = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M72 60a12 12 0 1 1-12-12 12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12 12 12 0 0 0 12 12M60 116a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12M60 184a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsNine))
export { Memo as IconDotsNine }
