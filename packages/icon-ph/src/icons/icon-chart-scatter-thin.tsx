/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartScatterThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v156h188a4 4 0 0 1 4 4m-96-52a8 8 0 1 0-8-8 8 8 0 0 0 8 8m-24-56a8 8 0 1 0-8-8 8 8 0 0 0 8 8m-32 72a8 8 0 1 0-8-8 8 8 0 0 0 8 8m96-48a8 8 0 1 0-8-8 8 8 0 0 0 8 8m24-40a8 8 0 1 0-8-8 8 8 0 0 0 8 8m-8 88a8 8 0 1 0-8-8 8 8 0 0 0 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartScatterThin))
export { Memo as IconChartScatterThin }
