/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendRightUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204.24 84.24a6 6 0 0 1-8.48 0L158 46.49V128A102.12 102.12 0 0 1 56 230a6 6 0 0 1 0-12 90.1 90.1 0 0 0 90-90V46.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendRightUpLight))
export { Memo as IconArrowBendRightUpLight }
