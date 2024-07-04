/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSuitcaseLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm68 22v132H94V70ZM38 200V72a2 2 0 0 1 2-2h42v132H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-42V70h42a2 2 0 0 1 2 2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSuitcaseLight))
export { Memo as IconSuitcaseLight }
