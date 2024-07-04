/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M52 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0m16 60V64a20 20 0 0 1 20-20h88a20 20 0 0 1 20 20v36a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20m24-4h80V68H92Zm144 60v36a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20v-36a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20m-24 4H92v28h120Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignLeftBold))
export { Memo as IconAlignLeftBold }
