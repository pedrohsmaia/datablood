/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyCnyThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M60 64a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m156 108a4 4 0 0 0-4 4v20h-36a20 20 0 0 1-20-20v-52h52a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8h52v12a60.07 60.07 0 0 1-60 60 4 4 0 0 0 0 8 68.07 68.07 0 0 0 68-68v-12h40v52a28 28 0 0 0 28 28h40a4 4 0 0 0 4-4v-24a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyCnyThin))
export { Memo as IconCurrencyCnyThin }
