/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadical = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 72v24a8 8 0 0 1-16 0V80h-98.45L79.49 202.81a8 8 0 0 1-15 0l-48-128a8 8 0 1 1 15-5.62L72 177.22l40.51-108A8 8 0 0 1 120 64h112a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadical))
export { Memo as IconRadical }
