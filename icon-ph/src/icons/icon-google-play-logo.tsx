/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGooglePlayLogo = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M223.82 114.19 56 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 32 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67 16 16 0 0 0 16.12 0l167.78-96a15.75 15.75 0 0 0 0-27.62ZM48 212.67V43.33L132.69 128Zm96-73.36 18.92 18.92-88.5 50.66ZM74.4 47.1l88.53 50.67L144 116.69ZM177.31 150l-22-22 22-22 38.43 22Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGooglePlayLogo))
export { Memo as IconGooglePlayLogo }
