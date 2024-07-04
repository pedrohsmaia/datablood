/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlagPennantThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m241.31 100.22-184-64A4 4 0 0 0 52 40v176a4 4 0 0 0 8 0v-45.16l181.31-63.06a4 4 0 0 0 0-7.56M60 162.37V45.63L227.82 104Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlagPennantThin))
export { Memo as IconFlagPennantThin }
