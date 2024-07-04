/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRssSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 200a12 12 0 0 1-24 0c0-77.2-62.8-140-140-140a12 12 0 0 1 0-24c90.43 0 164 73.57 164 164M56 108a12 12 0 0 0 0 24 68.07 68.07 0 0 1 68 68 12 12 0 0 0 24 0 92.1 92.1 0 0 0-92-92m4 72a16 16 0 1 0 16 16 16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRssSimpleBold))
export { Memo as IconRssSimpleBold }
