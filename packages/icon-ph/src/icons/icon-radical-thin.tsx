/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadicalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 72v24a4 4 0 0 1-8 0V76H122.77l-47 125.4a4 4 0 0 1-7.49 0l-48-128a4 4 0 0 1 7.49-2.81L72 188.61l44.26-118A4 4 0 0 1 120 68h112a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadicalThin))
export { Memo as IconRadicalThin }
