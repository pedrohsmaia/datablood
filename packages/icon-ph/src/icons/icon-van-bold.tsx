/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVanBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m253.11 112.18-45.57-53.09A19.94 19.94 0 0 0 192.26 52H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h14.06a36 36 0 0 0 67.88 0h40.12a36 36 0 0 0 67.88 0H236a20 20 0 0 0 20-20v-64a12.05 12.05 0 0 0-2.89-7.82M217.89 108H176V76h14.42ZM104 108V76h48v32ZM80 76v32H36V76Zm0 128a12 12 0 1 1 12-12 12 12 0 0 1-12 12m108 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12m33.94-24a36 36 0 0 0-67.88 0h-40.12a36 36 0 0 0-67.88 0H36v-48h196v48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVanBold))
export { Memo as IconVanBold }
