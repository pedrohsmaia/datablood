/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCellSignalHighDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M160 60.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity={0.2} />
        <Path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M152 80v120H32Zm40 120h-24V64l24-24Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCellSignalHighDuotone))
export { Memo as IconCellSignalHighDuotone }
