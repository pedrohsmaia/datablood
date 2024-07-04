/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTicketBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 108.4a20 20 0 0 0 16-19.59V64a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v24.81a20 20 0 0 0 16 19.59 20 20 0 0 1 0 39.2 20 20 0 0 0-16 19.59V192a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-24.81a20 20 0 0 0-16-19.59 20 20 0 0 1 0-39.2M36 170.34a44 44 0 0 0 0-84.68V68h48v120H36Zm184 0V188H108V68h112v17.66a44 44 0 0 0 0 84.68"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTicketBold))
export { Memo as IconTicketBold }
