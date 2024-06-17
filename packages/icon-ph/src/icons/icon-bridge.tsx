/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBridge = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 160h-32v-58.66a71.89 71.89 0 0 0 29 21.42 8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0 56 56 0 0 1-112 0 8 8 0 0 0-16 0 55.78 55.78 0 0 1-35 51.93 8 8 0 0 0 6 14.83 71.89 71.89 0 0 0 29-21.42V160H24a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-88-33.8V160h-32v-33.8a72 72 0 0 0 32 0m-72-25a72.47 72.47 0 0 0 24 19.27V160H72Zm88 58.8v-39.52a72.47 72.47 0 0 0 24-19.27V160Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBridge))
export { Memo as IconBridge }
