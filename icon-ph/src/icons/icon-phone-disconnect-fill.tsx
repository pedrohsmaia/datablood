/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhoneDisconnectFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236.28 161.84a16 16 0 0 1-18.38 5.06l-49-17.39-.29-.11a16 16 0 0 1-9.72-11.59l-6.21-29.75a76.52 76.52 0 0 0-49.68.11l-5.9 29.52a16 16 0 0 1-9.75 11.73l-.29.11-49 17.37a15.8 15.8 0 0 1-5.71 1.1 16 16 0 0 1-12.63-6.14c-17.23-22.22-15.3-51.71 4.69-71.71 56.15-56.17 151-56.17 207.18 0 19.99 19.98 21.92 49.47 4.69 71.69M216 192H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPhoneDisconnectFill))
export { Memo as IconPhoneDisconnectFill }
