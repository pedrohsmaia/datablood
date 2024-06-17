/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLightningBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M219.68 117.26a12 12 0 0 0-7.47-8.5l-54.44-20.41 14-70a12 12 0 0 0-20.54-10.54l-112 120a12 12 0 0 0 4.56 19.43l54.44 20.41-14 70a12 12 0 0 0 20.54 10.54l112-120a12 12 0 0 0 2.91-10.93m-103.63 83.67 7.72-38.58a12 12 0 0 0-7.56-13.59L69 131.07l70.93-76-7.72 38.58a12 12 0 0 0 7.56 13.59L187 124.93Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLightningBold))
export { Memo as IconLightningBold }
