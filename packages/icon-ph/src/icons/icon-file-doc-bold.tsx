/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileDocBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M48 140H32a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h16a40 40 0 0 0 0-80m0 56h-4v-32h4a16 16 0 0 1 0 32m180.3-3.8a12 12 0 0 1 .37 17A34 34 0 0 1 204 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83 12 12 0 0 1-17.34 16.6A10.27 10.27 0 0 0 204 164c-6.5 0-12 7.33-12 16s5.5 16 12 16a10.27 10.27 0 0 0 7.33-3.43 12 12 0 0 1 16.97-.37M128 140c-19.85 0-36 17.94-36 40s16.15 40 36 40 36-17.94 36-40-16.15-40-36-40m0 56c-6.5 0-12-7.33-12-16s5.5-16 12-16 12 7.33 12 16-5.5 16-12 16m-80-76a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.48l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m112-63 23 23h-23Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileDocBold))
export { Memo as IconFileDocBold }
