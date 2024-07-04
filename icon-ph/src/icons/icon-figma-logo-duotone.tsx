/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFigmaLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M192 128a32 32 0 1 1-32-32 32 32 0 0 1 32 32M88 96h40V32H88a32 32 0 0 0 0 64M56 196a36 36 0 0 0 72 0v-36H92a36 36 0 0 0-36 36"
          opacity={0.2}
        />
        <Path d="M184 96a40 40 0 0 0-24-72H88a40 40 0 0 0-24 72 40 40 0 0 0 1.37 65A44 44 0 1 0 136 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M64 64a24 24 0 0 1 24-24h32v48H88a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24 24 24 0 0 1-24 24" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFigmaLogoDuotone))
export { Memo as IconFigmaLogoDuotone }
