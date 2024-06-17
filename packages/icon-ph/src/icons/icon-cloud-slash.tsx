/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudSlash = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.24 43.17-.06.12A65 65 0 0 0 72 88a64 64 0 0 0 0 128h88a87.34 87.34 0 0 0 31.8-5.93l10.28 11.31a8 8 0 1 0 11.84-10.76ZM160 200H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.3.12A88.4 88.4 0 0 0 72 128a8 8 0 0 0 16 0 72.25 72.25 0 0 1 5.06-26.54l87 95.7A71.66 71.66 0 0 1 160 200m88-72a87.89 87.89 0 0 1-22.35 58.61A8 8 0 0 1 213.71 176a72 72 0 0 0-96.34-106 8 8 0 0 1-9.48-12.89A88 88 0 0 1 248 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudSlash))
export { Memo as IconCloudSlash }
