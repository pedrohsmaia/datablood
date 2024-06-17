/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicrosoftTeamsLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M219.26 80h-7.57A31.71 31.71 0 0 0 216 64a32 32 0 0 0-45.88-28.85A40 40 0 0 0 96.81 64H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h36.67a64 64 0 0 0 118.7-.15A40 40 0 0 0 232 152V92.74A12.76 12.76 0 0 0 219.26 80M136 32a24 24 0 0 1 15.07 42.68A16 16 0 0 0 136 64h-22.62A24 24 0 0 1 136 32M88 160a8 8 0 0 1-8-8v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16h-8v40a8 8 0 0 1-8 8m96 8a48 48 0 0 1-89.56 24H136a16 16 0 0 0 16-16V96h32Zm0-88h-16a39.89 39.89 0 0 0 7.6-29.6A16 16 0 1 1 184 80m32 72a24 24 0 0 1-16.36 22.75A62.76 62.76 0 0 0 200 168V96h16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMicrosoftTeamsLogoFill))
export { Memo as IconMicrosoftTeamsLogoFill }
