/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAmazonLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 168v32a4 4 0 0 1-8 0v-22.34l-9.1 9.1C224.52 189.37 188.3 228 128 228c-61.08 0-97.45-39.64-99-41.32a4 4 0 0 1 6-5.36c.35.39 35.63 38.68 93 38.68s92.68-38.29 93-38.68l.14-.15 9.17-9.17H208a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-80-62.49V84a40 40 0 0 0-75.64-18.18 4 4 0 1 1-7.12-3.64A48 48 0 0 1 172 84v92a4 4 0 0 1-8 0v-17.51a48 48 0 1 1 0-53Zm0 26.49a40 40 0 1 0-40 40 40 40 0 0 0 40-40"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAmazonLogoThin))
export { Memo as IconAmazonLogoThin }
