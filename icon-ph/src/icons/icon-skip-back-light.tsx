/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSkipBackLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M198.84 35.77a14 14 0 0 0-14.21.37L62 112.83V40a6 6 0 0 0-12 0v176a6 6 0 0 0 12 0v-72.84l122.63 76.7a14 14 0 0 0 14.21.37 13.69 13.69 0 0 0 7.16-12.11V47.88a13.69 13.69 0 0 0-7.16-12.11M194 208.12a1.79 1.79 0 0 1-1 1.62 2 2 0 0 1-2-.05L62.88 129.56a1.82 1.82 0 0 1 0-3.12L191 46.31a2 2 0 0 1 1-.31 2.1 2.1 0 0 1 1 .26 1.79 1.79 0 0 1 1 1.62Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSkipBackLight))
export { Memo as IconSkipBackLight }
