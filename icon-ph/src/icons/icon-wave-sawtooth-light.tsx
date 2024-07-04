/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveSawtoothLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m235.14 133.11-104 64A6 6 0 0 1 122 192V74.74l-94.85 58.37a6 6 0 1 1-6.29-10.22l104-64A6 6 0 0 1 134 64v117.26l94.85-58.37a6 6 0 1 1 6.29 10.22"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWaveSawtoothLight))
export { Memo as IconWaveSawtoothLight }
