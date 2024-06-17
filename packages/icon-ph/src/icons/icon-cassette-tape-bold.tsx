/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCassetteTapeBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M86.42 188l8-12h67.16l8 12ZM220 188h-21.58l-18.06-27.09a20 20 0 0 0-16.64-8.91H92.28a20 20 0 0 0-16.64 8.91L57.58 188H36V68h184ZM78 140h100a30 30 0 0 0 0-60H78a30 30 0 0 0 0 60m34-24v-12h32v12Zm72-6a6 6 0 0 1-6 6h-10v-12h10a6 6 0 0 1 6 6m-106-6h10v12H78a6 6 0 0 1 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCassetteTapeBold))
export { Memo as IconCassetteTapeBold }
