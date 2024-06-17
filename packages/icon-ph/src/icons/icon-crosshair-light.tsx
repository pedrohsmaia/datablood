/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCrosshairLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 122h-10.2A94.13 94.13 0 0 0 134 34.2V24a6 6 0 0 0-12 0v10.2A94.13 94.13 0 0 0 34.2 122H24a6 6 0 0 0 0 12h10.2a94.13 94.13 0 0 0 87.8 87.8V232a6 6 0 0 0 12 0v-10.2a94.13 94.13 0 0 0 87.8-87.8H232a6 6 0 0 0 0-12m-98 87.76V200a6 6 0 0 0-12 0v9.76A82.09 82.09 0 0 1 46.24 134H56a6 6 0 0 0 0-12h-9.76A82.09 82.09 0 0 1 122 46.24V56a6 6 0 0 0 12 0v-9.76A82.09 82.09 0 0 1 209.76 122H200a6 6 0 0 0 0 12h9.76A82.09 82.09 0 0 1 134 209.76M128 90a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCrosshairLight))
export { Memo as IconCrosshairLight }
