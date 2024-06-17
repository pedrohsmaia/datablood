/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGavelThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m240.49 119.52-16-16a12 12 0 0 0-17 0l-1.17 1.17-55-55 1.18-1.17a12 12 0 0 0 0-17l-16-16a12 12 0 0 0-17 0l-64 64a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l1.17-1.18L102.34 124l-68.2 68.21a21 21 0 0 0 29.66 29.66l68.2-68.21 12.69 12.69-1.18 1.17a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l64-64a12 12 0 0 0 0-17ZM77.17 106.83l-16-16a4 4 0 0 1 0-5.66l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.65l-64 64a4 4 0 0 1-5.66.01m-19 109.38a13 13 0 1 1-18.37-18.34l68.2-68.21L126.34 148Zm37.14-110.55 50.35-50.35 55 55-50.35 50.35Zm139.52 25.17-64 64a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 0-5.65l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGavelThin))
export { Memo as IconGavelThin }
