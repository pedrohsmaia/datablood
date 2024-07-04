/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInfoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M142 176a6 6 0 0 1-6 6 14 14 0 0 1-14-14v-40a2 2 0 0 0-2-2 6 6 0 0 1 0-12 14 14 0 0 1 14 14v40a2 2 0 0 0 2 2 6 6 0 0 1 6 6m-18-82a10 10 0 1 0-10-10 10 10 0 0 0 10 10m106 34A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90 90.1 90.1 0 0 0 90-90"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconInfoLight))
export { Memo as IconInfoLight }
