/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStopBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200.73 36H55.27A19.3 19.3 0 0 0 36 55.27v145.46A19.3 19.3 0 0 0 55.27 220h145.46A19.3 19.3 0 0 0 220 200.73V55.27A19.3 19.3 0 0 0 200.73 36M196 196H60V60h136Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStopBold))
export { Memo as IconStopBold }
