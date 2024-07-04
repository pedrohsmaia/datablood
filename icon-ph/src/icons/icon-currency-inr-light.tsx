/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyInrLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M206 80a6 6 0 0 1-6 6h-34.31a59.36 59.36 0 0 1 .31 6 58.07 58.07 0 0 1-58 58H87.52L164 219.56a6 6 0 0 1-8.08 8.88l-88-80A6 6 0 0 1 72 138h36a46.06 46.06 0 0 0 46-46 47.61 47.61 0 0 0-.4-6H72a6 6 0 0 1 0-12h78.33A46.08 46.08 0 0 0 108 46H72a6 6 0 0 1 0-12h128a6 6 0 0 1 0 12h-56.73a58.25 58.25 0 0 1 19.86 28H200a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyInrLight))
export { Memo as IconCurrencyInrLight }
