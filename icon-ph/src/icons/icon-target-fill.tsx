/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTargetFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32L167.6 99.71l-37.71 37.71-23.95 23.95a40 40 0 0 0 62-35.67 8 8 0 1 1 16-.9 56 56 0 0 1-95.5 42.79 56 56 0 0 1 73.13-84.43l22.73-22.77a87.88 87.88 0 1 0 23.13 29.67 8 8 0 0 1 14.44-6.9"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTargetFill))
export { Memo as IconTargetFill }
