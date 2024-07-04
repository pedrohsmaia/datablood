/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatLineUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m228.24 115.76-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v58a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-58h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v58H86v-58a6 6 0 0 0-6-6H46.49L128 32.49 209.51 114Zm6 102a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatLineUpLight))
export { Memo as IconArrowFatLineUpLight }
