/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodepenLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m235.79 89-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7l93.89 50.6a4 4 0 0 0 5.9-3.52v-57.3L66.55 128 32 146.61v-37.22L66.55 128l16.88-9.09L40.87 96 120 53.39v45.83l-36.57 19.69 44.57 24 44.57-24 16.88 9.09L224 109.39v37.22L189.45 128 136 156.78v57.3a4 4 0 0 0 5.9 3.52l93.89-50.6a8 8 0 0 0 4.21-7V96a8 8 0 0 0-4.21-7m-63.22 30L136 99.22V53.39L215.13 96Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodepenLogoFill))
export { Memo as IconCodepenLogoFill }
