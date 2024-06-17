/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretCircleUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m44.24-78.24a6 6 0 1 1-8.48 8.48L128 112.49l-35.76 35.75a6 6 0 0 1-8.48-8.48l40-40a6 6 0 0 1 8.48 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretCircleUpLight))
export { Memo as IconCaretCircleUpLight }
