/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignBottomBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-92-48V80a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v88a20 20 0 0 1-20 20h-36a20 20 0 0 1-20-20m24-4h28V84h-28Zm-116 4V40a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v128a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20m24-4h28V44H68Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignBottomBold))
export { Memo as IconAlignBottomBold }
