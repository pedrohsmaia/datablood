/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPatreonLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M170 36a73.68 73.68 0 0 0-50 19.53A20 20 0 0 0 100 36H64a20 20 0 0 0-20 20v152a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20v-43.5A74 74 0 1 0 170 36M96 204H68V60h28Zm74-44a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPatreonLogoBold))
export { Memo as IconPatreonLogoBold }
