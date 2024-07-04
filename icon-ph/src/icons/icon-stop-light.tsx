/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStopLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200.73 42H55.27A13.28 13.28 0 0 0 42 55.27v145.46A13.28 13.28 0 0 0 55.27 214h145.46A13.28 13.28 0 0 0 214 200.73V55.27A13.28 13.28 0 0 0 200.73 42M202 200.73a1.27 1.27 0 0 1-1.27 1.27H55.27a1.27 1.27 0 0 1-1.27-1.27V55.27A1.27 1.27 0 0 1 55.27 54h145.46a1.27 1.27 0 0 1 1.27 1.27Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStopLight))
export { Memo as IconStopLight }
