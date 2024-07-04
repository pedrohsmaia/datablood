/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGradientLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M26 104a6 6 0 0 1 6-6h80a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m198-6h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12M72 138H32a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m152 0h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m-126 6a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6m-42 34H32a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0H88a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12M32 70h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGradientLight))
export { Memo as IconGradientLight }
