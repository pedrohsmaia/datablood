/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserListLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M146 80a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12h-96a6 6 0 0 1-6-6m102 42h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m0 48h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m-98.19 20.5a6 6 0 1 1-11.62 3C131.7 168.29 107.23 150 80 150s-51.7 18.29-58.19 43.49a6 6 0 1 1-11.62-3c5.74-22.28 23-40.07 44.67-48a46 46 0 1 1 50.28 0c21.65 7.94 38.94 25.73 44.67 48.01M80 138a34 34 0 1 0-34-34 34 34 0 0 0 34 34"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserListLight))
export { Memo as IconUserListLight }
