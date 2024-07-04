/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPrescriptionDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M168 84a44 44 0 0 1-44 44H72V40h52a44 44 0 0 1 44 44"
          opacity={0.2}
        />
        <Path d="m183.31 188 22.35-22.34a8 8 0 0 0-11.32-11.32L172 176.69l-41.15-41.16A52 52 0 0 0 124 32H72a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-56h28.69l52 52-22.35 22.34a8 8 0 0 0 11.32 11.32L172 199.31l22.34 22.35a8 8 0 0 0 11.32-11.32ZM80 48h44a36 36 0 0 1 0 72H80Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPrescriptionDuotone))
export { Memo as IconPrescriptionDuotone }
