/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWallDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M128 104H32V56h96Zm48 0v48h-48v48h96v-96Z" opacity={0.2} />
        <Path d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M88 144v-32h80v32Zm-48 0v-32h32v32Zm144-32h32v32h-32Zm32-16h-80V64h80Zm-96-32v32H40V64Zm-80 96h80v32H40Zm96 32v-32h80v32Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWallDuotone))
export { Memo as IconWallDuotone }
