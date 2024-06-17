/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRugBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 12a12 12 0 0 0-12 12v12h-24V24a12 12 0 0 0-24 0v12h-24V24a12 12 0 0 0-24 0v12H68V24a12 12 0 0 0-24 0v208a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0V24a12 12 0 0 0-12-12M68 60h120v136H68Zm60 120a12 12 0 0 0 10.29-5.83l24-40a12 12 0 0 0 0-12.34l-24-40a12 12 0 0 0-20.58 0l-24 40a12 12 0 0 0 0 12.34l24 40A12 12 0 0 0 128 180m0-68.68L138 128l-10 16.68L118 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRugBold))
export { Memo as IconRugBold }
