/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHFour = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m96 112h-8v-24a8 8 0 0 0-16 0v24h-28.9l20.49-61.47a8 8 0 0 0-15.18-5.06l-24 72A8 8 0 0 0 184 184h40v24a8 8 0 0 0 16 0v-24h8a8 8 0 0 0 0-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHFour))
export { Memo as IconTextHFour }
