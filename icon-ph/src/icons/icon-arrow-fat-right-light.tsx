/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatRightLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m236.24 123.76-96-96A6 6 0 0 0 130 32v42H48a14 14 0 0 0-14 14v80a14 14 0 0 0 14 14h82v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48M142 209.51V176a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h88a6 6 0 0 0 6-6V46.49L223.51 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatRightLight))
export { Memo as IconArrowFatRightLight }
