/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyEthThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m219.15 125.53-88-112a4 4 0 0 0-6.3 0l-88 112a4 4 0 0 0 0 4.94l88 112a4 4 0 0 0 6.3 0l88-112a4 4 0 0 0 0-4.94M132 27.57l77.71 98.9L132 161.79Zm-8 134.22-77.71-35.32L124 27.57Zm0 8.79v57.85l-70.72-90Zm8 0 70.72-32.15-70.72 90Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyEthThin))
export { Memo as IconCurrencyEthThin }
