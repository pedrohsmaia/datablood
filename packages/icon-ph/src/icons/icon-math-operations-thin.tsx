/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMathOperationsThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M108 72a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 108H76v-28a4 4 0 0 0-8 0v28H40a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8m48-8h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-58.83-97.17a4 4 0 0 0 5.66 0L184 77.66l21.17 21.17a4 4 0 1 0 5.66-5.66L189.66 72l21.17-21.17a4 4 0 1 0-5.66-5.66L184 66.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L178.34 72l-21.17 21.17a4 4 0 0 0 0 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMathOperationsThin))
export { Memo as IconMathOperationsThin }
