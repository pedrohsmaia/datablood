/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArchiveBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 44H32a20 20 0 0 0-20 20v24a20 20 0 0 0 16 19.6V192a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-84.4A20 20 0 0 0 244 88V64a20 20 0 0 0-20-20M36 68h184v16H36Zm16 120v-80h152v80Zm112-52a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArchiveBold))
export { Memo as IconArchiveBold }
