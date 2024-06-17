/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyInrThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204 80a4 4 0 0 1-4 4h-36.58a57 57 0 0 1 .58 8 56.06 56.06 0 0 1-56 56H82.35l80.34 73a4 4 0 1 1-5.38 5.92l-88-80A4 4 0 0 1 72 140h36a48 48 0 0 0 47.32-56H72a4 4 0 0 1 0-8h81.25A48.09 48.09 0 0 0 108 44H72a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8h-63.19a56.24 56.24 0 0 1 24.85 32H200a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyInrThin))
export { Memo as IconCurrencyInrThin }
