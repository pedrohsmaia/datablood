/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeadphonesBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204.73 59.85A108.07 108.07 0 0 0 20 136v56a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-40a28 28 0 0 0-28-28H44.84A84.05 84.05 0 0 1 128 52h.64a83.7 83.7 0 0 1 82.52 72H192a28 28 0 0 0-28 28v40a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-56a107.34 107.34 0 0 0-31.27-76.15M64 148a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-44Zm148 44a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h20Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHeadphonesBold))
export { Memo as IconHeadphonesBold }
