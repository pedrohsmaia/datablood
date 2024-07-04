/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPawPrintFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 108a28 28 0 1 1-28-28 28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28 28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28 28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28 28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14 44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82 40 40 0 0 0 88 224a39.48 39.48 0 0 0 15.52-3.13 64.09 64.09 0 0 1 48.87 0 40 40 0 0 0 34.73-72Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPawPrintFill))
export { Memo as IconPawPrintFill }
