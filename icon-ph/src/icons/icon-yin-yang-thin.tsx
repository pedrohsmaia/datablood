/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconYinYangThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M36 128a92.1 92.1 0 0 1 92-92 44 44 0 0 1 0 88 52 52 0 0 0-37.44 88A92.14 92.14 0 0 1 36 128m92 92a44 44 0 0 1 0-88 52 52 0 0 0 37.44-88A92 92 0 0 1 128 220m8-44a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-16-96a8 8 0 1 1 8 8 8 8 0 0 1-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconYinYangThin))
export { Memo as IconYinYangThin }
