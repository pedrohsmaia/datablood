/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkSimpleHorizontalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M80 122h96a6 6 0 0 1 0 12H80a6 6 0 0 1 0-12m24 48H64a42 42 0 0 1 0-84h40a6 6 0 0 0 0-12H64a54 54 0 0 0 0 108h40a6 6 0 0 0 0-12m88-96h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLinkSimpleHorizontalLight))
export { Memo as IconLinkSimpleHorizontalLight }
