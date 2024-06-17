/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyholeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m36-108a36 36 0 1 0-59.55 27.22L92.57 169a8 8 0 0 0 7.43 11h56a8 8 0 0 0 7.43-11l-11.88-29.82A36.11 36.11 0 0 0 164 112m-21 27.42L156 172h-56l13-32.58a4 4 0 0 0-1.37-4.72 28 28 0 1 1 32.78 0 4 4 0 0 0-1.41 4.72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyholeThin))
export { Memo as IconKeyholeThin }
