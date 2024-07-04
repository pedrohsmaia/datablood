/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderNonbinaryBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M140 93V69.2l21.83 13.09a12 12 0 1 0 12.34-20.58L151.32 48l22.85-13.71a12 12 0 0 0-12.34-20.58L128 34 94.17 13.71a12 12 0 0 0-12.34 20.58L104.68 48 81.83 61.71a12 12 0 1 0 12.34 20.58L116 69.2V93a76 76 0 1 0 24 0m-12 127a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderNonbinaryBold))
export { Memo as IconGenderNonbinaryBold }
