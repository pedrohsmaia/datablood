/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFunctionThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204 40a4 4 0 0 1-4 4h-29.29a28 28 0 0 0-27.55 23l-10.37 57H184a4 4 0 0 1 0 8h-52.66l-10.63 58.44A36 36 0 0 1 85.29 220H56a4 4 0 0 1 0-8h29.29a28 28 0 0 0 27.55-23l10.37-57H72a4 4 0 0 1 0-8h52.66l10.63-58.44A36 36 0 0 1 170.71 36H200a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFunctionThin))
export { Memo as IconFunctionThin }
