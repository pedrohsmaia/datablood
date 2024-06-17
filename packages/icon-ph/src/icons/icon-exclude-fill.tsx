/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExcludeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 160a80 80 0 0 1-158.64 14.64 80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160m-80-80a80.29 80.29 0 0 1 14.64 1.36 80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconExcludeFill))
export { Memo as IconExcludeFill }
