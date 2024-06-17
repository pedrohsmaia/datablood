/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTabsThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m251.81 166.86-22.29-74.3A11.92 11.92 0 0 0 218.05 84H208a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L242.62 164H203l-21.46-71.45A11.92 11.92 0 0 0 170.05 84H160a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L194.62 164H155l-21.46-71.45A11.92 11.92 0 0 0 122.05 84H38a11.92 11.92 0 0 0-11.49 8.55l-22.34 74.3v.17A4 4 0 0 0 8 172h240a4 4 0 0 0 4-4 3.89 3.89 0 0 0-.19-1.14m-217.69-72A4 4 0 0 1 38 92h84.1a4 4 0 0 1 3.83 2.85L146.62 164H13.38Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTabsThin))
export { Memo as IconTabsThin }
