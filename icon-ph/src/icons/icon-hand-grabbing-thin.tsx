/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandGrabbingThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M188 84a23.87 23.87 0 0 0-16.07 6.2A24 24 0 0 0 128 78.75 24 24 0 0 0 84 92v24H68a24 24 0 0 0-24 24v12a84 84 0 0 0 168 0v-44a24 24 0 0 0-24-24m16 68a76 76 0 0 1-152 0v-12a16 16 0 0 1 16-16h16v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHandGrabbingThin))
export { Memo as IconHandGrabbingThin }
