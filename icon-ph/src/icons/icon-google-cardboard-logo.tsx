/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGoogleCardboardLogo = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.69a15.86 15.86 0 0 0 11.31-4.69l24-24 24 24a15.86 15.86 0 0 0 11.31 4.69H224a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-60.69l-24-24a16 16 0 0 0-22.62 0l-24 24H32V64h192ZM80 160a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16m96 48a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGoogleCardboardLogo))
export { Memo as IconGoogleCardboardLogo }
