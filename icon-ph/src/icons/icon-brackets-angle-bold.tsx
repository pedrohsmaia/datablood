/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBracketsAngleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M90.12 46.44 38.22 128l51.9 81.56a12 12 0 1 1-20.24 12.88l-56-88a12 12 0 0 1 0-12.88l56-88a12 12 0 0 1 20.24 12.88m152 75.12-56-88a12 12 0 1 0-20.24 12.88l51.9 81.56-51.9 81.56a12 12 0 1 0 20.24 12.88l56-88a12 12 0 0 0 0-12.88"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBracketsAngleBold))
export { Memo as IconBracketsAngleBold }
