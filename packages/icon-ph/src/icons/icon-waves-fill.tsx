/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWavesFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-20.42 135.16c-.72.36-17.89 8.84-35.58 8.84-17.89 0-27.29-4.7-35.58-8.84-7.68-3.84-14.31-7.16-28.42-7.16-13.84 0-28.29 7.09-28.43 7.16a8 8 0 0 1-7.15-14.32c.72-.36 17.89-8.84 35.58-8.84 17.89 0 27.29 4.7 35.58 8.84 7.68 3.84 14.31 7.16 28.42 7.16 13.84 0 28.29-7.09 28.43-7.16a8 8 0 0 1 7.15 14.32m0-40c-.72.36-17.89 8.84-35.58 8.84-17.89 0-27.29-4.7-35.58-8.84-7.68-3.84-14.31-7.16-28.42-7.16-13.84 0-28.29 7.09-28.43 7.16a8 8 0 0 1-7.15-14.32c.72-.36 17.89-8.84 35.58-8.84 17.89 0 27.29 4.7 35.58 8.84 7.68 3.84 14.31 7.16 28.42 7.16 13.84 0 28.29-7.09 28.43-7.16a8 8 0 0 1 7.15 14.32m0-40c-.72.36-17.89 8.84-35.58 8.84-17.89 0-27.29-4.7-35.58-8.84C116.74 91.32 110.11 88 96 88c-13.84 0-28.29 7.09-28.43 7.16a8 8 0 0 1-7.15-14.32C61.14 80.48 78.31 72 96 72c17.89 0 27.29 4.7 35.58 8.84C139.26 84.68 145.89 88 160 88c13.84 0 28.29-7.09 28.43-7.16a8 8 0 0 1 7.15 14.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWavesFill))
export { Memo as IconWavesFill }
