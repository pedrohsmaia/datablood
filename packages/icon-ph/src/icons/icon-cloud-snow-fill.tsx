/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudSnowFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M88 196a12 12 0 1 1-12-12 12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12 12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12 12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m75.87-136.45a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61 92.48 92.48 0 0 1 2.33-16.51 4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168H156a76.08 76.08 0 0 0 75.87-80.45"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudSnowFill))
export { Memo as IconCloudSnowFill }
