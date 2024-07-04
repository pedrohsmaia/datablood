/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesThreeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 76a40 40 0 1 0-40 40 40 40 0 0 0 40-40m-40 32a32 32 0 1 1 32-32 32 32 0 0 1-32 32m60 24a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32 32 32 0 0 1-32 32M68 132a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesThreeThin))
export { Memo as IconCirclesThreeThin }
