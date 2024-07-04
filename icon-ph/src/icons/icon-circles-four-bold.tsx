/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesFourBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M78 36a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42 42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18 18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18m100-60a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesFourBold))
export { Memo as IconCirclesFourBold }
