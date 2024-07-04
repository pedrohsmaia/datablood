/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconQuestionThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 180a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-8-104c-19.85 0-36 14.36-36 32v4a4 4 0 0 0 8 0v-4c0-13.23 12.56-24 28-24s28 10.77 28 24-12.56 24-28 24a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-4.2c18-1.77 32-15.36 32-31.8 0-17.64-16.15-32-36-32m100 52A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconQuestionThin))
export { Memo as IconQuestionThin }
