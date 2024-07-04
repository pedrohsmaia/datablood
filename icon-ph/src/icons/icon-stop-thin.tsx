/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStopThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200.73 44H55.27A11.29 11.29 0 0 0 44 55.27v145.46A11.29 11.29 0 0 0 55.27 212h145.46A11.29 11.29 0 0 0 212 200.73V55.27A11.29 11.29 0 0 0 200.73 44M204 200.73a3.28 3.28 0 0 1-3.27 3.27H55.27a3.28 3.28 0 0 1-3.27-3.27V55.27A3.28 3.28 0 0 1 55.27 52h145.46a3.28 3.28 0 0 1 3.27 3.27Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStopThin))
export { Memo as IconStopThin }
