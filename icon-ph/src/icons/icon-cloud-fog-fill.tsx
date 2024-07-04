/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudFogFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 224a8 8 0 0 1-8 8h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8m-40-32a8 8 0 0 0-8-8H72a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8m56-8h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m47.87-96.45a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61 92.48 92.48 0 0 1 2.33-16.51 4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168H156a76.08 76.08 0 0 0 75.87-80.45"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudFogFill))
export { Memo as IconCloudFogFill }
