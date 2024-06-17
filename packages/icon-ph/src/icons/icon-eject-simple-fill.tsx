/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEjectSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 208a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M40.09 168h175.82a16.1 16.1 0 0 0 12.48-26.23L146.74 40.94a24.11 24.11 0 0 0-37.48 0L27.61 141.77A16.1 16.1 0 0 0 40.09 168"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEjectSimpleFill))
export { Memo as IconEjectSimpleFill }
