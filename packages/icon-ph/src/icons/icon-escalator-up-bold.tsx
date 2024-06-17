/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEscalatorUpBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 36h-52.5a20.07 20.07 0 0 0-14.69 6.43L66.75 140H32a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h52.5a20.07 20.07 0 0 0 14.69-6.43L189.25 116H224a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 56h-32.5a20.07 20.07 0 0 0-14.69 6.43L82.75 196H36v-32h32.5a20.07 20.07 0 0 0 14.69-6.43L173.25 60H220Zm12.49 75.51a12 12 0 0 1-17 17L212 181v27a12 12 0 0 1-24 0v-27l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEscalatorUpBold))
export { Memo as IconEscalatorUpBold }
