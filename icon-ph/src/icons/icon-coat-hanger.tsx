/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCoatHanger = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M241.57 171.2 141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0 8 8 0 0 0 16 0 24 24 0 0 1 47.69-3.78l-28.35 21.27-.28.21-108.63 81.5A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM232 184H24l104-78z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCoatHanger))
export { Memo as IconCoatHanger }
