/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineUpLeftFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M56 152V56a8 8 0 0 1 8-8h96a8 8 0 0 1 5.66 13.66L123.31 104l58.35 58.34a8 8 0 0 1-11.32 11.32L112 115.31l-42.34 42.35A8 8 0 0 1 56 152m160 56H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineUpLeftFill))
export { Memo as IconArrowLineUpLeftFill }
