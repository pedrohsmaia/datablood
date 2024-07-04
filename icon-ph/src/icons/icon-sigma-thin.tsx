/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSigmaThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M188 72V52H72.32l58.8 73.5a4 4 0 0 1 0 5L72.32 204H188v-20a4 4 0 0 1 8 0v24a4 4 0 0 1-4 4H64a4 4 0 0 1-3.12-6.5l62-77.5-62-77.5A4 4 0 0 1 64 44h128a4 4 0 0 1 4 4v24a4 4 0 0 1-8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSigmaThin))
export { Memo as IconSigmaThin }
