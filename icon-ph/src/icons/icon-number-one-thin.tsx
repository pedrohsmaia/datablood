/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberOneThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M140 48v160a4 4 0 0 1-8 0V55.06L98.06 75.43a4 4 0 0 1-4.12-6.86l40-24A4 4 0 0 1 140 48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberOneThin))
export { Memo as IconNumberOneThin }
