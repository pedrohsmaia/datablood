/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDownLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m212.24 100.24-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 167.51l75.76-75.75a6 6 0 0 1 8.48 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDownLight))
export { Memo as IconCaretDownLight }
