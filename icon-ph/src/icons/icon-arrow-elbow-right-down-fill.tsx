/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowRightDownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m229.66 165.66-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 128 152h40V72H32a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8v88h40a8 8 0 0 1 5.66 13.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowRightDownFill))
export { Memo as IconArrowElbowRightDownFill }
