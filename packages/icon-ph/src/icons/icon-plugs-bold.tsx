/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlugsBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m137 168 11.52-11.51a12 12 0 0 0-17-17L120 151l-15-15 11.52-11.51a12 12 0 0 0-17-17L88 119l-15.51-15.49a12 12 0 0 0-17 17L59 124l-20.46 20.49a36 36 0 0 0 0 50.91l2.55 2.54-25.58 25.57a12 12 0 0 0 17 17l25.57-25.58 2.54 2.55a36.06 36.06 0 0 0 50.91 0L132 197l3.51 3.52a12 12 0 0 0 17-17Zm-42.46 32.49a12 12 0 0 1-17 0l-22.03-22.06a12 12 0 0 1 0-17L76 141l39 39Zm146-185a12 12 0 0 0-17 0l-25.6 25.6-2.54-2.55a36.05 36.05 0 0 0-50.91 0L124 59l-3.51-3.52a12 12 0 0 0-17 17l80 80a12 12 0 0 0 17-17L197 132l20.49-20.49a36 36 0 0 0 0-50.91l-2.55-2.54 25.58-25.57a12 12 0 0 0-.03-16.98Zm-40 79L180 115l-39-39 20.49-20.49a12 12 0 0 1 17 0l22.06 22.06a12 12 0 0 1 0 17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlugsBold))
export { Memo as IconPlugsBold }
