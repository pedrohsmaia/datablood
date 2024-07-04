/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKnifeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M229 35a24 24 0 0 0-34 0L21.14 213.4a4 4 0 0 0 2 6.7 150.65 150.65 0 0 0 34 3.9c32.64 0 65.34-10.65 96.12-31.52 31.2-21.15 49.21-45 50-46a4 4 0 0 0-.37-5.24l-21.48-21.5L229 69a24.09 24.09 0 0 0 0-34m-34.35 109.41a226.48 226.48 0 0 1-45.89 41.44c-37.93 25.72-77.18 35.09-116.76 27.9L146.53 96.24Zm28.68-81.07a.76.76 0 0 0-.09.09l-47.54 50.68-23.58-23.6 48.57-49.83a16 16 0 0 1 22.64 22.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKnifeThin))
export { Memo as IconKnifeThin }
