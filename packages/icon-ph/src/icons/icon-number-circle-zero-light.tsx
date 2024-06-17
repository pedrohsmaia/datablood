/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleZeroLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m0-144c-13.52 0-24.69 6.12-32.29 17.71C89.45 101.24 86 114.13 86 128s3.45 26.76 9.7 36.29C103.31 175.88 114.47 182 128 182s24.69-6.12 32.29-17.71c6.26-9.53 9.71-22.42 9.71-36.29s-3.45-26.76-9.7-36.29C152.69 80.12 141.52 74 128 74m0 96c-20.72 0-30-21.09-30-42s9.28-42 30-42 30 21.09 30 42-9.28 42-30 42"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleZeroLight))
export { Memo as IconNumberCircleZeroLight }
