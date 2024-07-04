/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserCircleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172 120a44 44 0 1 1-44-44 44.05 44.05 0 0 1 44 44m60 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.09 88.09 0 0 0-91.47-87.93C77.43 41.89 39.87 81.12 40 128.25a87.65 87.65 0 0 0 22.24 58.16A79.71 79.71 0 0 1 84 165.1a4 4 0 0 1 4.83.32 59.83 59.83 0 0 0 78.28 0 4 4 0 0 1 4.83-.32 79.71 79.71 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserCircleFill))
export { Memo as IconUserCircleFill }
