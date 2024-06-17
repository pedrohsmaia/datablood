/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWifiMediumBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 204a16 16 0 1 1-16-16 16 16 0 0 1 16 16m63.45-84.36a128 128 0 0 0-158.9 0 12 12 0 0 0 14.9 18.81 104 104 0 0 1 129.1 0 12 12 0 0 0 14.9-18.81m-32.38 35.66a80.05 80.05 0 0 0-94.14 0 12 12 0 0 0 14.14 19.4 56 56 0 0 1 65.86 0 12 12 0 1 0 14.14-19.4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWifiMediumBold))
export { Memo as IconWifiMediumBold }
