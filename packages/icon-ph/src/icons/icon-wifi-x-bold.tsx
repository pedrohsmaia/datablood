/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWifiXBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 204a16 16 0 1 1-16-16 16 16 0 0 1 16 16m73-124 15.52-15.51a12 12 0 0 0-17-17L200 63l-15.51-15.49a12 12 0 0 0-17 17L183 80l-15.49 15.51a12 12 0 0 0 17 17L200 97l15.51 15.52a12 12 0 0 0 17-17Zm-41.9 75.3a80 80 0 0 0-94.13 0 12 12 0 1 0 14.13 19.4 56 56 0 0 1 65.87 0 12 12 0 0 0 14.13-19.4M131.71 68h.3a12 12 0 0 0 .28-24H128A176.27 176.27 0 0 0 16.39 83.91a12 12 0 1 0 15.23 18.55A152.24 152.24 0 0 1 128 68zm-.12 48a12 12 0 0 0 .82-24H128a126.66 126.66 0 0 0-79.45 27.64 12 12 0 0 0 14.9 18.81A102.89 102.89 0 0 1 128 116c1.2 0 2.41 0 3.59.06Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWifiXBold))
export { Memo as IconWifiXBold }
