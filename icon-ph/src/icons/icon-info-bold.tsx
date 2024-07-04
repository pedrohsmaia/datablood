/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInfoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M108 84a16 16 0 1 1 16 16 16 16 0 0 1-16-16m128 44A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84m-72 36.68V132a20 20 0 0 0-20-20 12 12 0 0 0-4 23.32V168a20 20 0 0 0 20 20 12 12 0 0 0 4-23.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconInfoBold))
export { Memo as IconInfoBold }
