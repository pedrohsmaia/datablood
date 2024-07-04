/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowLeftUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 192a6 6 0 0 1-6 6H80a6 6 0 0 1-6-6V62.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L86 62.49V186h138a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowLeftUpLight))
export { Memo as IconArrowElbowLeftUpLight }
