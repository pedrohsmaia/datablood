/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNavigationArrowFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 113.58a15.76 15.76 0 0 1-11.29 15l-76.56 23.56-23.56 76.56a15.77 15.77 0 0 1-15 11.29h-.3a15.77 15.77 0 0 1-15.07-10.67L33 53.41a1 1 0 0 1-.05-.16 16 16 0 0 1 20.3-20.35l.16.05 175.92 65.26A15.78 15.78 0 0 1 240 113.58"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNavigationArrowFill))
export { Memo as IconNavigationArrowFill }
