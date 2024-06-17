/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileyAngryLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 150a10 10 0 1 1 10-10 10 10 0 0 1-10 10m72-20a10 10 0 1 0 10 10 10 10 0 0 0-10-10m66-2A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90 90.1 90.1 0 0 0 90-90m-45.33-45L128 112.79 83.33 83a6 6 0 0 0-6.66 10l48 32a6 6 0 0 0 6.66 0l48-32a6 6 0 1 0-6.66-10m-17.35 96c-8.13-5.4-15.88-9-27.32-9s-19.19 3.6-27.32 9a6 6 0 0 0 6.64 10c6.67-4.43 12.19-7 20.68-7s14 2.57 20.68 7a5.94 5.94 0 0 0 3.31 1 6 6 0 0 0 3.33-11"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSmileyAngryLight))
export { Memo as IconSmileyAngryLight }
