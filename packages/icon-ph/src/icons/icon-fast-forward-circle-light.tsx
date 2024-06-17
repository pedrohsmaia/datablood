/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFastForwardCircleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m63.33-95-48-32a6 6 0 0 0-9.33 5v26.12L87.33 91A6 6 0 0 0 78 96v64a6 6 0 0 0 9.33 5L134 133.88V160a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M90 148.79v-41.58L121.18 128Zm56 0v-41.58L177.18 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFastForwardCircleLight))
export { Memo as IconFastForwardCircleLight }
