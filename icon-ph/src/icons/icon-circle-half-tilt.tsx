/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleHalfTilt = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46M184 195.87a87.16 87.16 0 0 1-16 10.5V99.31l16-16Zm-80-32.56 16-16v68.28a88.37 88.37 0 0 1-16-3Zm-16 43.06a87 87 0 0 1-16.3-10.76l16.3-16.3Zm48-75.06 16-16v97.32a88.37 88.37 0 0 1-16 3ZM40 128a88 88 0 0 1 144.3-67.61L60.38 184.31A87.34 87.34 0 0 1 40 128m160 50.59V77.41a88 88 0 0 1 0 101.18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleHalfTilt))
export { Memo as IconCircleHalfTilt }
