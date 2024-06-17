/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyRubFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 108a28 28 0 0 1-28 28h-36V80h36a28 28 0 0 1 28 28m56 20A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-40-20a44.05 44.05 0 0 0-44-44h-44a8 8 0 0 0-8 8v64H80a8 8 0 0 0 0 16h16v16H80a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h40a8 8 0 0 0 0-16h-40v-16h36a44.05 44.05 0 0 0 44-44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyRubFill))
export { Memo as IconCurrencyRubFill }
