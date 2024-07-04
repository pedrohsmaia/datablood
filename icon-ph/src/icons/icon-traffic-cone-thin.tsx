/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrafficConeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 212h-21.16L149.65 36.06A12 12 0 0 0 138.31 28h-20.62a12 12 0 0 0-11.34 8.06L45.16 212H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M92.58 100h70.84l19.47 56H73.11Zm21.33-61.31a4 4 0 0 1 3.78-2.69h20.62a4 4 0 0 1 3.78 2.69L160.63 92H95.37ZM70.32 164h115.36l16.69 48H53.63Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrafficConeThin))
export { Memo as IconTrafficConeThin }
