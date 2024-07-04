/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEjectBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 160H48a20 20 0 0 0-20 20v20a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-20a20 20 0 0 0-20-20m-4 36H52v-12h152ZM48.27 144h159.46a20.27 20.27 0 0 0 14.61-34.3l-73.76-76.92a28.51 28.51 0 0 0-41.16 0L33.66 109.7A20.27 20.27 0 0 0 48.27 144m76.48-94.61a4.49 4.49 0 0 1 6.5 0L199 120H57Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEjectBold))
export { Memo as IconEjectBold }
