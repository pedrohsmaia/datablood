/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendDownRightDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m224 152-48 48v-96Z" opacity={0.2} />
        <Path d="m229.66 146.34-48-48A8 8 0 0 0 168 104v40h-40a88.1 88.1 0 0 1-88-88 8 8 0 0 0-16 0 104.11 104.11 0 0 0 104 104h40v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 180.69v-57.38L212.69 152Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendDownRightDuotone))
export { Memo as IconArrowBendDownRightDuotone }
