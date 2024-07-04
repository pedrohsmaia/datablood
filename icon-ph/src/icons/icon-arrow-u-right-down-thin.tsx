/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowURightDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m218.83 178.83-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L164 214.34V88a52 52 0 0 0-104 0v88a4 4 0 0 1-8 0V88a60 60 0 0 1 120 0v126.34l41.17-41.17a4 4 0 0 1 5.66 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowURightDownThin))
export { Memo as IconArrowURightDownThin }
