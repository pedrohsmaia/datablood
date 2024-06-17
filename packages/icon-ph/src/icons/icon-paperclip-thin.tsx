/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaperclipThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M206.83 125.17a4 4 0 0 1 0 5.66l-82.06 82a52 52 0 0 1-73.54-73.55l99.29-100.73a36 36 0 1 1 50.94 50.9l-99.3 100.69a20 20 0 1 1-28.3-28.27l83.29-84.68a4 4 0 1 1 5.7 5.61l-83.31 84.7a12 12 0 1 0 16.95 17l99.29-100.69a28 28 0 1 0-39.58-39.63L56.91 144.87a44 44 0 1 0 62.21 62.26l82-82a4 4 0 0 1 5.71.04"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaperclipThin))
export { Memo as IconPaperclipThin }
