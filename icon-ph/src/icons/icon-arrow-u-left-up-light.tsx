/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowULeftUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M206 80v88a62 62 0 0 1-124 0V46.49L44.24 84.24a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L94 46.49V168a50 50 0 0 0 100 0V80a6 6 0 0 1 12 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowULeftUpLight))
export { Memo as IconArrowULeftUpLight }
