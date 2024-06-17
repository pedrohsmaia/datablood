/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFaceMaskFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 72h-.85a16 16 0 0 0-9.68-10l-80-29a16.06 16.06 0 0 0-10.94 0l-80 29.09a16 16 0 0 0-9.68 10H32A32 32 0 0 0 0 104v24a32 32 0 0 0 32 32h5.13c6.54 14.44 19.26 27.12 37.7 37.36 21 11.68 43.52 17 49.92 18.3a15.7 15.7 0 0 0 6.5 0c6.4-1.34 28.9-6.62 49.92-18.3 18.44-10.24 31.16-22.92 37.7-37.36H224a32 32 0 0 0 32-32v-24a32 32 0 0 0-32-32M32 144a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v48.15a59.94 59.94 0 0 0 .53 7.85Zm136 0H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m0-32H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m72 16a16 16 0 0 1-16 16h-.53a59.94 59.94 0 0 0 .53-7.85V88a16 16 0 0 1 16 16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFaceMaskFill))
export { Memo as IconFaceMaskFill }
