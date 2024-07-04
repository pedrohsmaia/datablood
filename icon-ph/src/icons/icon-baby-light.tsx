/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBabyLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 138a10 10 0 1 1 10-10 10 10 0 0 1-10 10m72-20a10 10 0 1 0 10 10 10 10 0 0 0-10-10m-11.2 44.92a47 47 0 0 1-49.6 0 6 6 0 0 0-6.4 10.16 59 59 0 0 0 62.4 0 6 6 0 1 0-6.4-10.16M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90.11 90.11 0 0 0-87.07-89.95C118.3 55.23 118 71.85 118 72a10 10 0 0 0 20 0 6 6 0 0 1 12 0 22 22 0 0 1-44 0c0-.75.15-15.82 10.14-33.22A90 90 0 1 0 218 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBabyLight))
export { Memo as IconBabyLight }
