/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGoodreadsLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 104v8a32 32 0 0 1-64 0v-8a32 32 0 0 1 64 0m72 24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-56-64a8 8 0 0 0-16 0v4.26A48 48 0 0 0 80 104v8a48 48 0 0 0 80 35.74V160a32 32 0 0 1-57.6 19.2 8 8 0 1 0-12.8 9.6A48 48 0 0 0 176 160Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGoodreadsLogoFill))
export { Memo as IconGoodreadsLogoFill }
