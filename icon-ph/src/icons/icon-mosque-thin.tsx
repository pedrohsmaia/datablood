/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMosqueThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 132a19.91 19.91 0 0 0-12 4v-8c0-39.63-28.82-58.82-52-74.23-15-10-28-18.66-28-29.77a4 4 0 0 0-8 0c0 11.11-13 19.76-28 29.77C72.82 69.18 44 88.37 44 128v8a20 20 0 0 0-32 16v56a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-32a12 12 0 0 1 24 0v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4v-32a12 12 0 0 1 24 0v32a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-56a20 20 0 0 0-20-20M100.41 60.43C112 52.71 122.51 45.71 128 37.14c5.49 8.57 16 15.57 27.59 23.29C177.41 75 202 91.34 203.87 124H52.13C54 91.34 78.59 75 100.41 60.43M20 152a12 12 0 0 1 24 0v52H20Zm140 4a20 20 0 0 0-20 20v28h-24v-28a20 20 0 0 0-40 0v28H52v-72h152v72h-24v-28a20 20 0 0 0-20-20m76 48h-24v-52a12 12 0 0 1 24 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMosqueThin))
export { Memo as IconMosqueThin }
