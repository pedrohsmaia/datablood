/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconListBulletsFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M56 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16M40 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16m0 128a16 16 0 1 0 16 16 16 16 0 0 0-16-16m176-64H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m0-64H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m0 128H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconListBulletsFill))
export { Memo as IconListBulletsFill }
