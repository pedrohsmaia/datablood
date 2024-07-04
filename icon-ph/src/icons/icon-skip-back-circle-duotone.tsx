/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSkipBackCircleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96m32 136-64-40 64-40Z"
          opacity={0.2}
        />
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m35.88-135a8 8 0 0 0-8.12.22L104 113.57V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-25.57l51.76 32.35A8 8 0 0 0 168 168V88a8 8 0 0 0-4.12-7M152 153.57 111.09 128 152 102.43Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSkipBackCircleDuotone))
export { Memo as IconSkipBackCircleDuotone }
