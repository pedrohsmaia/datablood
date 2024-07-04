/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyRubThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M148 36H88a4 4 0 0 0-4 4v100H56a4 4 0 0 0 0 8h28v24H56a4 4 0 0 0 0 8h28v36a4 4 0 0 0 8 0v-36h52a4 4 0 0 0 0-8H92v-24h56a56 56 0 0 0 0-112m0 104H92V44h56a48 48 0 0 1 0 96"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyRubThin))
export { Memo as IconCurrencyRubThin }
