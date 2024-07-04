/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretRightLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m180.24 132.24-80 80a6 6 0 0 1-8.48-8.48L167.51 128 91.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretRightLight))
export { Memo as IconCaretRightLight }
