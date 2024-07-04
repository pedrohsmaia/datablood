/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUploadSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M168 80H88l40-40Z" opacity={0.2} />
        <Path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0M80.61 83.06a8 8 0 0 1 1.73-8.72l40-40a8 8 0 0 1 11.32 0l40 40A8 8 0 0 1 168 88h-32v64a8 8 0 0 1-16 0V88H88a8 8 0 0 1-7.39-4.94M107.31 72h41.38L128 51.31Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconUploadSimpleDuotone))
export { Memo as IconUploadSimpleDuotone }
