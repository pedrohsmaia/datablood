/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookmarksSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M156 56H60a20 20 0 0 0-20 20v152a12 12 0 0 0 19 9.76l49-35 49 35a12 12 0 0 0 19-9.76V76a20 20 0 0 0-20-20m-4 148.68-37-26.45a12 12 0 0 0-14 0l-37 26.45V80h88ZM216 36v152a12 12 0 0 1-24 0V40H92a12 12 0 0 1 0-24h104a20 20 0 0 1 20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookmarksSimpleBold))
export { Memo as IconBookmarksSimpleBold }
