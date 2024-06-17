/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyKrwFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m128 110.78 6.46 17.22h-12.92Zm-36 50.44L98.46 144H85.54ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 8a8 8 0 0 0-8-8h-14.46l14-37.19a8 8 0 0 0-15-5.62l-16 42.81h-25l-16-42.81a8 8 0 0 0-15 0L104.46 128H79.54L63.49 85.19a8 8 0 1 0-15 5.62l14 37.19H48a8 8 0 0 0 0 16h20.46l16.05 42.81a8 8 0 0 0 15 0L115.54 144h24.92l16 42.81a8 8 0 0 0 15 0l16-42.81H208a8 8 0 0 0 8-8m-52 25.22 6.46-17.22h-12.92Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyKrwFill))
export { Memo as IconCurrencyKrwFill }
