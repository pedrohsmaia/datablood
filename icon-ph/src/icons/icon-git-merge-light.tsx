/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitMergeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 114a30.05 30.05 0 0 0-29.4 24H152a42.2 42.2 0 0 1-33.6-16.8L90.56 84.08A30 30 0 1 0 74 85.4v85.2a30 30 0 1 0 12 0V98l22.8 30.4A54.26 54.26 0 0 0 152 150h26.6a30 30 0 1 0 29.4-36M62 56a18 18 0 1 1 18 18 18 18 0 0 1-18-18m36 144a18 18 0 1 1-18-18 18 18 0 0 1 18 18m110-38a18 18 0 1 1 18-18 18 18 0 0 1-18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitMergeLight))
export { Memo as IconGitMergeLight }
