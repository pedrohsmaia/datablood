/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesFour = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M80 40a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40 40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24 24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesFour))
export { Memo as IconCirclesFour }
