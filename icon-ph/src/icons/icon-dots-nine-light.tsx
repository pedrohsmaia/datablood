/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsNineLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M70 60a10 10 0 1 1-10-10 10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10 10 10 0 0 0 10 10M60 118a10 10 0 1 0 10 10 10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10M60 186a10 10 0 1 0 10 10 10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsNineLight))
export { Memo as IconDotsNineLight }
