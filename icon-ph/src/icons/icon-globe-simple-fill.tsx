/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlobeSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.63 96H175.8c-1.41-28.46-10.27-55.47-25.12-77a88.2 88.2 0 0 1 64.95 77m-119.4 16h63.54c-1.68 30.87-13 59.62-31.77 79.89-18.73-20.27-30.09-49.02-31.77-79.89m0-16c1.68-30.87 13-59.62 31.77-79.89 18.73 20.27 30.09 49 31.77 79.89Zm54.45 93c14.85-21.56 23.71-48.57 25.12-77h39.83a88.2 88.2 0 0 1-64.95 77"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGlobeSimpleFill))
export { Memo as IconGlobeSimpleFill }
