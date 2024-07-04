/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M100 176a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m132-52v112a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V80a4 4 0 0 1 2.85-3.81l160-48a4 4 0 0 1 2.3 7.66L59.25 76H216a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H36v116a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Zm-24 56a36 36 0 1 1-36-36 36 36 0 0 1 36 36m-8 0a28 28 0 1 0-28 28 28 28 0 0 0 28-28m-92-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadioThin))
export { Memo as IconRadioThin }
