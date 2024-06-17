/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGoogleCardboardLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.69a15.86 15.86 0 0 0 11.31-4.69l21.17-21.17a4 4 0 0 1 5.66 0L152 203.32a15.89 15.89 0 0 0 11.31 4.68H224a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 152a24 24 0 1 1 24-24 24 24 0 0 1-24 24m96 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGoogleCardboardLogoFill))
export { Memo as IconGoogleCardboardLogoFill }
