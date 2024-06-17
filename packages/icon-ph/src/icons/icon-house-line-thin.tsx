/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHouseLineThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 212h-20v-96.46a12 12 0 0 0-3.87-8.82l-80.06-75.59a12 12 0 0 0-16.2.05l-79.94 75.49a12 12 0 0 0-3.93 8.87V212H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M44 115.54a4.09 4.09 0 0 1 1.36-3l79.94-75.49a4 4 0 0 1 5.33 0l80.06 75.58a4 4 0 0 1 1.31 3V212h-56v-52a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v52H44ZM148 212h-40v-52a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHouseLineThin))
export { Memo as IconHouseLineThin }
