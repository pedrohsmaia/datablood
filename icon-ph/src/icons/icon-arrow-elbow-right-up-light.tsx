/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowRightUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228.24 100.24a6 6 0 0 1-8.48 0L182 62.49V192a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h138V62.49l-37.76 37.75a6 6 0 1 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowRightUpLight))
export { Memo as IconArrowElbowRightUpLight }
