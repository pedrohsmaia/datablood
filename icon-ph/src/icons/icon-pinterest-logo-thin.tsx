/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPinterestLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 112c0 21.53-7.5 41.18-21.12 55.34C178.26 180.47 161.17 188 144 188c-21.35 0-33.52-8.76-39.76-15.57l-12.35 52.49A4 4 0 0 1 88 228a4.2 4.2 0 0 1-.92-.11 4 4 0 0 1-3-4.81l32-136a4 4 0 0 1 7.78 1.84l-17.28 73.45C109 166.42 119 180 144 180c29.49 0 60-25.44 60-68a76 76 0 1 0-141.83 38 4 4 0 0 1-6.93 4A84 84 0 1 1 212 112"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPinterestLogoThin))
export { Memo as IconPinterestLogoThin }
