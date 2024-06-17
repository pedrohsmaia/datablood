/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleNotchLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 128a102 102 0 0 1-204 0c0-40.18 23.35-76.86 59.5-93.45a6 6 0 0 1 5 10.9C58.61 60.09 38 92.49 38 128a90 90 0 0 0 180 0c0-35.51-20.61-67.91-52.5-82.55a6 6 0 0 1 5-10.9C206.65 51.14 230 87.82 230 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleNotchLight))
export { Memo as IconCircleNotchLight }
