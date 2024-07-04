/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNotionLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 42h-48a6 6 0 0 0 0 12h18v130.64L109.26 45.11A6 6 0 0 0 104 42H40a6 6 0 0 0 0 12h18v148H40a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12H70V71.36l76.74 139.53A6 6 0 0 0 152 214h40a6 6 0 0 0 6-6V54h18a6 6 0 0 0 0-12M74.15 54h26.3l81.4 148h-26.3Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNotionLogoLight))
export { Memo as IconNotionLogoLight }
