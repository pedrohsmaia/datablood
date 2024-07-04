/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCheckSquareOffset = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48v160a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V48H48v96a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-98.34 106.34a8 8 0 0 0-11.32 0L64 204.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l24 24a8 8 0 0 0 11.32 0l56-56a8 8 0 0 0 0-11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCheckSquareOffset))
export { Memo as IconCheckSquareOffset }
