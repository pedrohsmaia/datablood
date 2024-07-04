/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHSixDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M240 64v136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V56h192a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m96 124a36 36 0 1 1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8 8 0 0 1 13.74 8.2l-16.69 28c.6 0 1.21-.05 1.82-.05A36 36 0 0 1 248 180m-16 0a20 20 0 1 0-20 20 20 20 0 0 0 20-20" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTextHSixDuotone))
export { Memo as IconTextHSixDuotone }
