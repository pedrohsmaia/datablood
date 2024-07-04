/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAnchorThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 140a4 4 0 0 0-4 4 44.05 44.05 0 0 1-44 44 44 44 0 0 0-36 18.73V124h36a4 4 0 0 0 0-8h-36V83.71a28 28 0 1 0-8 0V116H88a4 4 0 0 0 0 8h36v82.73A44 44 0 0 0 88 188a44.05 44.05 0 0 1-44-44 4 4 0 0 0-8 0 52.06 52.06 0 0 0 52 52 36 36 0 0 1 36 36 4 4 0 0 0 8 0 36 36 0 0 1 36-36 52.06 52.06 0 0 0 52-52 4 4 0 0 0-4-4M108 56a20 20 0 1 1 20 20 20 20 0 0 1-20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAnchorThin))
export { Memo as IconAnchorThin }
