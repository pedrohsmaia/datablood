/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCookieLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M163.07 164.93a10 10 0 1 1-14.14 0 10 10 0 0 1 14.14 0m-78.14-8a10 10 0 1 0 14.14 0 10 10 0 0 0-14.14 0m6.14-41.86a10 10 0 1 0-14.14 0 10 10 0 0 0 14.14 0m33.86 1.86a10 10 0 1 0 14.14 0 10 10 0 0 0-14.14 0M230 128A102 102 0 1 1 128 26a6 6 0 0 1 6 6 42 42 0 0 0 42 42 6 6 0 0 1 6 6 42 42 0 0 0 42 42 6 6 0 0 1 6 6m-12.18 5.65A54.09 54.09 0 0 1 170.3 85.7a54.09 54.09 0 0 1-48-47.53 90 90 0 1 0 95.47 95.48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCookieLight))
export { Memo as IconCookieLight }
