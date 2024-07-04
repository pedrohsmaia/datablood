/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164.25 91.75a6 6 0 0 1 0 8.49l-64 64a6 6 0 0 1-8.49-8.48l64-64a6 6 0 0 1 8.49-.01M214.2 41.8a54.07 54.07 0 0 0-76.38 0l-30.07 30.05a6 6 0 0 0 8.49 8.49l30.07-30.06a42 42 0 0 1 59.41 59.41l-30.08 30.07a6 6 0 1 0 8.49 8.49l30.07-30.07a54 54 0 0 0 0-76.38m-74.44 133.84-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLinkSimpleLight))
export { Memo as IconLinkSimpleLight }
