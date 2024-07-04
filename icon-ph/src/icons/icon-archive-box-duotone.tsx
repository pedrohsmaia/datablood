/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArchiveBoxDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 72v136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V72Z"
          opacity={0.2}
        />
        <Path d="m223.16 68.42-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.08 8.08 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.08 8.08 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-61.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArchiveBoxDuotone))
export { Memo as IconArchiveBoxDuotone }
