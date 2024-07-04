/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m210.83 98.83-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 0 1 5.66-5.66L128 170.34l77.17-77.17a4 4 0 1 1 5.66 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDownThin))
export { Memo as IconCaretDownThin }
