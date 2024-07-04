/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUsbBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m251.2 118.4-48-36A12 12 0 0 0 184 92v24H76V76h26.06a36 36 0 1 0 0-24H72a20 20 0 0 0-20 20v44H12a12 12 0 0 0 0 24h40v44a20 20 0 0 0 20 20h28v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4H76v-40h108v24a12 12 0 0 0 19.2 9.6l48-36a12 12 0 0 0 0-19.2M136 52a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-12 128h24v24h-24Zm84-40v-24l16 12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUsbBold))
export { Memo as IconUsbBold }
