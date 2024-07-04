/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareInLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M126 136v64a6 6 0 0 1-12 0v-49.51l-69.76 69.75a6 6 0 0 1-8.48-8.48L105.51 142H56a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m82-102H80a14 14 0 0 0-14 14v48a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v128a2 2 0 0 1-2 2h-48a6 6 0 0 0 0 12h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareInLight))
export { Memo as IconArrowSquareInLight }
