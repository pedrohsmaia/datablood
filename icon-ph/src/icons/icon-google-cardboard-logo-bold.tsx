/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGoogleCardboardLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h60.69a19.86 19.86 0 0 0 14.14-5.86L128 185l21.17 21.17a19.86 19.86 0 0 0 14.14 5.83H224a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144h-55l-22.83-22.83a20 20 0 0 0-28.28 0L91 188H36V68h184ZM82 160a34 34 0 1 0-34-34 34 34 0 0 0 34 34m0-44a10 10 0 1 1-10 10 10 10 0 0 1 10-10m92 44a34 34 0 1 0-34-34 34 34 0 0 0 34 34m0-44a10 10 0 1 1-10 10 10 10 0 0 1 10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGoogleCardboardLogoBold))
export { Memo as IconGoogleCardboardLogoBold }
