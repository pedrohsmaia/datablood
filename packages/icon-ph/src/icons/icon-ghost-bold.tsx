/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGhostBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M116 116a16 16 0 1 1-16-16 16 16 0 0 1 16 16m40-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m72 20v96a12 12 0 0 1-19.6 9.29l-21.73-17.79-21.74 17.79a12 12 0 0 1-15.2 0L128 207.5l-21.73 17.79a12 12 0 0 1-15.2 0L69.33 207.5 47.6 225.29A12 12 0 0 1 28 216v-96a100 100 0 0 1 200 0m-24 0a76 76 0 0 0-152 0v70.68l9.73-8a12 12 0 0 1 15.2 0l21.74 17.82 21.73-17.79a12 12 0 0 1 15.2 0l21.73 17.79 21.74-17.79a12 12 0 0 1 15.2 0l9.73 8Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGhostBold))
export { Memo as IconGhostBold }
