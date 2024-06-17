/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunHorizon = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 152h-40.45a73.54 73.54 0 0 0 .45-8 72 72 0 0 0-144 0 73.54 73.54 0 0 0 .45 8H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-168-8a56 56 0 1 1 111.41 8H72.59a56.13 56.13 0 0 1-.59-8m144 56a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8M72.84 43.58a8 8 0 0 1 14.32-7.16l8 16a8 8 0 0 1-14.32 7.16Zm-56 48.84a8 8 0 0 1 10.74-3.57l16 8a8 8 0 0 1-7.16 14.31l-16-8a8 8 0 0 1-3.58-10.74m192 15.16a8 8 0 0 1 3.58-10.73l16-8a8 8 0 1 1 7.16 14.31l-16 8a8 8 0 0 1-10.74-3.58m-48-55.16 8-16a8 8 0 0 1 14.32 7.16l-8 16a8 8 0 1 1-14.32-7.16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunHorizon))
export { Memo as IconSunHorizon }
