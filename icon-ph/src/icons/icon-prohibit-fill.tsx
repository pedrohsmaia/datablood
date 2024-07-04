/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconProhibitFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 128a71.69 71.69 0 0 1-15.78 44.91L83.09 71.78A71.95 71.95 0 0 1 200 128m-144 0a71.95 71.95 0 0 0 116.91 56.22L71.78 83.09A71.69 71.69 0 0 0 56 128m180 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-20 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconProhibitFill))
export { Memo as IconProhibitFill }
