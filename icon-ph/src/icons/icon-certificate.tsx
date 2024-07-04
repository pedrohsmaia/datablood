/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCertificate = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128m-56-40a40 40 0 1 1-40 40 40 40 0 0 1 40-40m3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16 8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8m-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCertificate))
export { Memo as IconCertificate }
