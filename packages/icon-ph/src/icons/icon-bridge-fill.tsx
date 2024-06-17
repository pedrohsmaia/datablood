/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBridgeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 160h-8v-39.5c1.63.81 3.29 1.57 5 2.26a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0 56 56 0 0 1-112 0 8 8 0 0 0-16 0 55.78 55.78 0 0 1-35 51.93 8 8 0 0 0 6 14.83c1.71-.69 3.37-1.45 5-2.26V160h-7.4c-6.31 0-8.6 4.78-8.6 8a8 8 0 0 0 8 8h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-160-8a8 8 0 0 1-16 0v-44.65a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-20.65a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-20.65a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-44.65a8 8 0 0 1 16 0Zm0-50.2v-.46l.41.51Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBridgeFill))
export { Memo as IconBridgeFill }
