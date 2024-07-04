/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMonitorPlayLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m163.33 115-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M118 140.79V99.21L149.18 120ZM208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10Zm-52 48a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMonitorPlayLight))
export { Memo as IconMonitorPlayLight }
