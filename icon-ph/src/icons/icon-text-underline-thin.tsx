/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextUnderlineThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M196 224a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m-68-28a60.07 60.07 0 0 0 60-60V56a4 4 0 0 0-8 0v80a52 52 0 0 1-104 0V56a4 4 0 0 0-8 0v80a60.07 60.07 0 0 0 60 60"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextUnderlineThin))
export { Memo as IconTextUnderlineThin }
