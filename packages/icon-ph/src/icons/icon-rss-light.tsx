/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRssLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M97.5 158.5A69.54 69.54 0 0 1 118 208a6 6 0 0 1-12 0 58 58 0 0 0-58-58 6 6 0 0 1 0-12 69.54 69.54 0 0 1 49.5 20.5M48 90a6 6 0 0 0 0 12 106 106 0 0 1 106 106 6 6 0 0 0 12 0A118 118 0 0 0 48 90m117.38.62A164.92 164.92 0 0 0 48 42a6 6 0 0 0 0 12 153 153 0 0 1 108.89 45.11A153 153 0 0 1 202 208a6 6 0 0 0 12 0 164.92 164.92 0 0 0-48.62-117.38M52 194a10 10 0 1 0 10 10 10 10 0 0 0-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRssLight))
export { Memo as IconRssLight }
