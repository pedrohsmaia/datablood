/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookmarksBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 20H96a20 20 0 0 0-20 20v20H64a20 20 0 0 0-20 20v144a12 12 0 0 0 19.32 9.51L108 199.14l44.69 34.37A12 12 0 0 0 172 224v-46.4l20.68 15.91A12 12 0 0 0 212 184V40a20 20 0 0 0-20-20m-44 179.63-32.69-25.14a12 12 0 0 0-14.63 0L68 199.63V84h80Zm40-40-16-12.3V80a20 20 0 0 0-20-20h-52V44h88Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookmarksBold))
export { Memo as IconBookmarksBold }
