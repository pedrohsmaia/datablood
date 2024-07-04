/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmStripDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M32 176h192v24a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8ZM216 48H40a8 8 0 0 0-8 8v24h192V56a8 8 0 0 0-8-8"
          opacity={0.2}
        />
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h80v80H40Zm96-16V56h32v16Zm-16 0H88V56h32Zm0 112v16H88v-16Zm16 0h32v16h-32Zm0-16V88h80v80Zm80-96h-32V56h32ZM72 56v16H40V56ZM40 184h32v16H40Zm176 16h-32v-16h32z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFilmStripDuotone))
export { Memo as IconFilmStripDuotone }
