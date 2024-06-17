/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlugChargingThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 60h-52V16a4 4 0 0 0-8 0v44H92V16a4 4 0 0 0-8 0v44H32.55C28.13 60 28 63.59 28 64a4 4 0 0 0 4 4h20v92a36 36 0 0 0 36 36h36v44a4 4 0 0 0 8 0v-44h36a36 36 0 0 0 36-36V68h20a4 4 0 0 0 0-8m-28 100a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28V68h136Zm-87.29-29.72a4 4 0 0 1-.46-3.68l12-32a4 4 0 0 1 7.5 2.8l-10 26.6H144a4 4 0 0 1 3.75 5.4l-12 32a4 4 0 1 1-7.5-2.8l10-26.6H112a4 4 0 0 1-3.29-1.72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlugChargingThin))
export { Memo as IconPlugChargingThin }
