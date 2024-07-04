/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsNineBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M76 60a16 16 0 1 1-16-16 16 16 0 0 1 16 16m52-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 32a16 16 0 1 0-16-16 16 16 0 0 0 16 16M60 112a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16M60 180a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsNineBold))
export { Memo as IconDotsNineBold }
