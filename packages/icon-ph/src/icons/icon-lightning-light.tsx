/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLightningLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M213.84 118.63a6 6 0 0 0-3.73-4.25l-59.23-22.21 15-75a6 6 0 0 0-10.27-5.27l-112 120a6 6 0 0 0 2.28 9.71l59.23 22.21-15 75a6 6 0 0 0 3.14 6.52A6.07 6.07 0 0 0 96 246a6 6 0 0 0 4.39-1.91l112-120a6 6 0 0 0 1.45-5.46M106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85 91.46-98-11.82 59.29a6 6 0 0 0 3.77 6.8l55.6 20.85Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLightningLight))
export { Memo as IconLightningLight }
