/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmStripFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 16h32v16h-32ZM72 200H40v-16h32Zm0-128H40V56h32Zm48 128H88v-16h32Zm0-128H88V56h32Zm48 128h-32v-16h32Zm0-128h-32V56h32Zm48 128h-32v-16h32z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmStripFill))
export { Memo as IconFilmStripFill }
