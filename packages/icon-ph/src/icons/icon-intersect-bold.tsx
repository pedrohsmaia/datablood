/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconIntersectBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M178 78A84 84 0 1 0 78 178 84 84 0 1 0 178 78m-22.19 22.19a59.57 59.57 0 0 1-9.81 28.9L126.94 110a59.57 59.57 0 0 1 28.9-9.84Zm-79.5 52.51a60 60 0 1 1 76.33-76.33 84.11 84.11 0 0 0-76.3 76.3Zm23.82 3.17a59.57 59.57 0 0 1 9.81-28.9L129.06 146a59.57 59.57 0 0 1-28.9 9.84ZM160 220a60.09 60.09 0 0 1-56.67-40.34 84.11 84.11 0 0 0 76.33-76.33A60 60 0 0 1 160 220"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconIntersectBold))
export { Memo as IconIntersectBold }
