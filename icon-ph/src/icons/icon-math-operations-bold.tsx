/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMathOperationsBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M116 72a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 100H84v-20a12 12 0 0 0-24 0v20H40a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h20a12 12 0 0 0 0-24m48 4h64a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24m64 16h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m-64.49-87.51a12 12 0 0 0 17 0L184 89l15.51 15.52a12 12 0 0 0 17-17L201 72l15.52-15.51a12 12 0 0 0-17-17L184 55l-15.51-15.49a12 12 0 0 0-17 17L167 72l-15.49 15.51a12 12 0 0 0 0 16.98"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMathOperationsBold))
export { Memo as IconMathOperationsBold }
