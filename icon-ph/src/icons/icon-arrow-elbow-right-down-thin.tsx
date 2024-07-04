/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowRightDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m226.83 162.83-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 1 1 5.66-5.66L172 198.34V68H32a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4v134.34l41.17-41.17a4 4 0 0 1 5.66 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowRightDownThin))
export { Memo as IconArrowElbowRightDownThin }
