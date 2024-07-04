/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEjectSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6M27.39 158a14 14 0 0 1 1.77-15l81.66-100.8a22.1 22.1 0 0 1 34.36 0L226.84 143a14.09 14.09 0 0 1-10.93 23H40.09a14 14 0 0 1-12.7-8m10.83-5.16a2 2 0 0 0 1.87 1.16h175.82a2 2 0 0 0 1.87-1.18 2 2 0 0 0-.27-2.24L135.86 49.76a10.1 10.1 0 0 0-15.72 0L38.49 150.58a2 2 0 0 0-.27 2.24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEjectSimpleLight))
export { Memo as IconEjectSimpleLight }
