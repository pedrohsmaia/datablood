/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhosphorLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 26H64a6 6 0 0 0-6 6v128a78.09 78.09 0 0 0 78 78 6 6 0 0 0 6-6v-66h2a70 70 0 0 0 0-140M70 54.91 125.74 154H70Zm60 82.19L74.26 38H130ZM70.28 166H130v59.73A66.1 66.1 0 0 1 70.28 166M144 154h-2V38h2a58 58 0 0 1 0 116"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPhosphorLogoLight))
export { Memo as IconPhosphorLogoLight }
