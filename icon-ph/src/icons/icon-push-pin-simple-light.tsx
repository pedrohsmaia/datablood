/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPushPinSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 170h-11L183.15 46H192a6 6 0 0 0 0-12H64a6 6 0 0 0 0 12h8.85L51 170H40a6 6 0 0 0 0 12h82v58a6 6 0 0 0 12 0v-58h82a6 6 0 0 0 0-12M85 46h86l21.88 124H63.15Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPushPinSimpleLight))
export { Memo as IconPushPinSimpleLight }
