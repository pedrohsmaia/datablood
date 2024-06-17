/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaintRollerBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 84h-16V64a20 20 0 0 0-20-20H52a20 20 0 0 0-20 20v20H16a12 12 0 0 0 0 24h16v20a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-20h12v43l-97.5 27.8A20.09 20.09 0 0 0 116 198v34a12 12 0 0 0 24 0v-30.95l97.5-27.85A20.09 20.09 0 0 0 252 154v-50a20 20 0 0 0-20-20m-40 40H56V68h136Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaintRollerBold))
export { Memo as IconPaintRollerBold }
