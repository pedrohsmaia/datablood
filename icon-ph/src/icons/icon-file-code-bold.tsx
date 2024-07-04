/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileCodeBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180.49 143.51a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L155 152l-15.52-15.51a12 12 0 1 1 17-17Zm-64-24a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l24 24a12 12 0 0 0 17-17L101 152l15.52-15.51a12 12 0 0 0-.03-16.98M220 88v128a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88m-60-31v23h23Zm36 155V104h-48a12 12 0 0 1-12-12V44H60v168Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileCodeBold))
export { Memo as IconFileCodeBold }
