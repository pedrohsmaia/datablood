/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHSixBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m217.06 140.33 13.24-22.18a12 12 0 1 0-20.6-12.3l-32.25 54c-.09.15-.17.31-.25.47a40 40 0 1 0 39.86-20ZM212 196a16 16 0 1 1 16-16 16 16 0 0 1-16 16M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHSixBold))
export { Memo as IconTextHSixBold }
