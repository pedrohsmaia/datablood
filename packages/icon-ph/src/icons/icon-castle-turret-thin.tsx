/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCastleTurretThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 28h-16a12 12 0 0 0-12 12v16a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4V40a12 12 0 0 0-12-12h-16a12 12 0 0 0-12 12v16a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V40a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v44.69a11.93 11.93 0 0 0 3.51 8.48l11.32 11.32a4 4 0 0 1 1.17 2.82V216a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V107.31a4 4 0 0 1 1.17-2.82l11.32-11.32a11.93 11.93 0 0 0 3.51-8.48V40a12 12 0 0 0-12-12m-52 192h-40v-68a20 20 0 0 1 40 0Zm56-135.31a4 4 0 0 1-1.17 2.82l-11.32 11.32a11.93 11.93 0 0 0-3.51 8.48V216a4 4 0 0 1-4 4h-28v-68a28 28 0 0 0-56 0v68H72a4 4 0 0 1-4-4V107.31a11.93 11.93 0 0 0-3.51-8.48L53.17 87.51A4 4 0 0 1 52 84.69V40a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V40a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V40a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCastleTurretThin))
export { Memo as IconCastleTurretThin }
