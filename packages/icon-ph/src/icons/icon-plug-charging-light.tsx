/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlugChargingLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 58h-50V16a6 6 0 0 0-12 0v42H94V16a6 6 0 0 0-12 0v42H32.55A6.1 6.1 0 0 0 26 64a6 6 0 0 0 6 6h18v90a38 38 0 0 0 38 38h34v42a6 6 0 0 0 12 0v-42h34a38 38 0 0 0 38-38V70h18a6 6 0 0 0 0-12m-30 102a26 26 0 0 1-26 26H88a26 26 0 0 1-26-26V70h132Zm-86.93-28.58a6 6 0 0 1-.69-5.53l12-32a6 6 0 1 1 11.24 4.22l-9 23.89H144a6 6 0 0 1 5.62 8.11l-12 32a6 6 0 0 1-11.24-4.22l9-23.89H112a6 6 0 0 1-4.93-2.58"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlugChargingLight))
export { Memo as IconPlugChargingLight }
