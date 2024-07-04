/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodeSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M90.66 67 22 128l68.64 61a4 4 0 0 1-5.32 6l-72-64a4 4 0 0 1 0-6l72-64a4 4 0 1 1 5.32 6Zm152 58-72-64a4 4 0 1 0-5.32 6L234 128l-68.64 61a4 4 0 0 0 5.32 6l72-64a4 4 0 0 0 0-6Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodeSimpleThin))
export { Memo as IconCodeSimpleThin }
