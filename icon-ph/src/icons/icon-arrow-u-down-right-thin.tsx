/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUDownRightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m226.83 170.83-48 48a4 4 0 0 1-5.66-5.66L214.34 172H88a60 60 0 0 1 0-120h88a4 4 0 0 1 0 8H88a52 52 0 0 0 0 104h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUDownRightThin))
export { Memo as IconArrowUDownRightThin }
