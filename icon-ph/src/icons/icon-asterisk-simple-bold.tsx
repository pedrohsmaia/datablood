/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAsteriskSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m212.45 107.14-65.19 26.08 46.21 59.41a12 12 0 1 1-18.94 14.74L128 147.55l-46.53 59.82a12 12 0 0 1-18.94-14.74l46.21-59.41-65.19-26.08a12 12 0 1 1 8.91-22.28L116 110.28V40a12 12 0 0 1 24 0v70.28l63.54-25.42a12 12 0 1 1 8.91 22.28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAsteriskSimpleBold))
export { Memo as IconAsteriskSimpleBold }
