/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLightningThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M211.89 119.09a4 4 0 0 0-2.49-2.84l-60.81-22.8 15.33-76.67a4 4 0 0 0-6.84-3.51l-112 120a4 4 0 0 0-1 3.64 4 4 0 0 0 2.49 2.84l60.81 22.8-15.3 76.67a4 4 0 0 0 6.84 3.51l112-120a4 4 0 0 0 .97-3.64M102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36 153.32 29l-13.24 66.2a4 4 0 0 0 2.52 4.53l58.4 21.91Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLightningThin))
export { Memo as IconLightningThin }
