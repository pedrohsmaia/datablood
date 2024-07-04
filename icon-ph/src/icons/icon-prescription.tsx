/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPrescription = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m183.31 188 22.35-22.34a8 8 0 0 0-11.32-11.32L172 176.69l-41.15-41.16A52 52 0 0 0 124 32H72a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-56h28.69l52 52-22.35 22.34a8 8 0 0 0 11.32 11.32L172 199.31l22.34 22.35a8 8 0 0 0 11.32-11.32ZM80 48h44a36 36 0 0 1 0 72H80Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPrescription))
export { Memo as IconPrescription }
