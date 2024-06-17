/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNavigationArrowBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230.7 94.46 54.81 29.21l-.25-.09a20 20 0 0 0-25.44 25.44l.09.25L94.46 230.7A20 20 0 0 0 113.3 244h.35a20 20 0 0 0 18.77-14.12l22.93-74.53 74.53-22.93a20 20 0 0 0 .82-38ZM146.27 133A20 20 0 0 0 133 146.27l-20 65.28L54.8 54.8 211.55 113Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNavigationArrowBold))
export { Memo as IconNavigationArrowBold }
