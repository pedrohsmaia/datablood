/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartLineFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v62.92l34.88-29.07a8 8 0 0 1 9.56-.51l43 28.69 43.41-36.18a8 8 0 0 1 10.24 12.3l-48 40a8 8 0 0 1-9.56.51l-43-28.69L64 155.75V176Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartLineFill))
export { Memo as IconChartLineFill }
