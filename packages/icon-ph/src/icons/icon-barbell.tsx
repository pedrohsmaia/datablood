/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBarbell = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M248 120h-8V88a16 16 0 0 0-16-16h-16v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v56h-48V64a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H32a16 16 0 0 0-16 16v32H8a8 8 0 0 0 0 16h8v32a16 16 0 0 0 16 16h16v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-56h48v56a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h16a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 0-16M32 168V88h16v80Zm56 24H64V64h24zm104 0h-24V64h24v112.18zm32-24h-16V88h16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBarbell))
export { Memo as IconBarbell }
