/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhoneXFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M154.34 90.34 172.69 72l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 60.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.32 72l18.34 18.34a8 8 0 0 1-11.32 11.32L184 83.31l-18.34 18.35a8 8 0 0 1-11.32-11.32m68 68.12-47.11-21.11-.13-.06a16 16 0 0 0-15.17 1.4 8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92 16 16 0 0 0-9.51-16.62Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPhoneXFill))
export { Memo as IconPhoneXFill }
