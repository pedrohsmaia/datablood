/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDivideLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-94-50a14 14 0 1 0-14-14 14 14 0 0 0 14 14m0 100a14 14 0 1 0 14 14 14 14 0 0 0-14-14"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDivideLight))
export { Memo as IconDivideLight }
