/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLockersBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 80a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m-12 28h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24M76 92h16a12 12 0 0 0 0-24H76a12 12 0 0 0 0 24m16 16H76a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m136-60v176a12 12 0 0 1-24 0v-12h-64v12a12 12 0 0 1-24 0v-12H52v12a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20M116 188V52H52v136Zm24 0h64V52h-64Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLockersBold))
export { Memo as IconLockersBold }
