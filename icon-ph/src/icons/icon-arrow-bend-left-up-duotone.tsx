/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendLeftUpDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M152 80H56l48-48Z" opacity={0.2} />
        <Path d="M200 216a88.1 88.1 0 0 1-88-88V88h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 56 88h40v40a104.11 104.11 0 0 0 104 104 8 8 0 0 0 0-16M104 43.31 132.69 72H75.31Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendLeftUpDuotone))
export { Memo as IconArrowBendLeftUpDuotone }
