/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVault = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVault))
export { Memo as IconVault }
