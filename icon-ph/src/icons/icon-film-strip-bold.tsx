/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmStripBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 100h72v56H44Zm96-24V60h24v16Zm-24 0H92V60h24Zm0 104v16H92v-16Zm24 0h24v16h-24Zm0-24v-56h72v56Zm72-80h-24V60h24ZM68 60v16H44V60ZM44 180h24v16H44Zm144 16v-16h24v16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmStripBold))
export { Memo as IconFilmStripBold }
