/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFigmaLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M184 96a40 40 0 0 0-24-72H88a40 40 0 0 0-24 72 40 40 0 0 0 1.37 65A44 44 0 1 0 136 196v-36a40 40 0 1 0 48-64m-48-56h24a24 24 0 0 1 0 48h-24Zm24 112a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFigmaLogoFill))
export { Memo as IconFigmaLogoFill }
