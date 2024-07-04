/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretRightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m181.66 133.66-80 80A8 8 0 0 1 88 208V48a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretRightFill))
export { Memo as IconCaretRightFill }
