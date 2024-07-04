/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesThreeBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 76a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48m-48 24a24 24 0 1 1 24-24 24 24 0 0 1-24 24m60 24a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesThreeBold))
export { Memo as IconCirclesThreeBold }
