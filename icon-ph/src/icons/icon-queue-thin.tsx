/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconQueueThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m100 60H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m108-28a4 4 0 0 1-1.88 3.39l-64 40a4 4 0 0 1-2.12.61 4.06 4.06 0 0 1-1.94-.5A4 4 0 0 1 172 200v-80a4 4 0 0 1 6.12-3.39l64 40A4 4 0 0 1 244 160m-11.55 0L180 127.22v65.56Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconQueueThin))
export { Memo as IconQueueThin }
