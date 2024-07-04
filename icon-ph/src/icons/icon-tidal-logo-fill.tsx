/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTidalLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m253.66 101.66-36 36a8 8 0 0 1-11.32 0l-36-36-.34-.38-.34.38L135.31 136l34.35 34.34a8 8 0 0 1 0 11.32l-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32L120.69 136l-34.35-34.34-.34-.38-.34.38-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32l36-36a8 8 0 0 1 11.32 0l36 36 .34.38.34-.38 36-36a8 8 0 0 1 11.32 0l36 36 .34.38.34-.38 36-36a8 8 0 0 1 11.32 0l36 36a8 8 0 0 1 0 11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTidalLogoFill))
export { Memo as IconTidalLogoFill }
