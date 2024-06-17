/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPrescriptionFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 120H96V72h32a24 24 0 0 1 0 48m96-72v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-34.34 138.34L175.31 172l14.35-14.34a8 8 0 0 0-11.32-11.32L164 160.69l-26-26A40 40 0 0 0 128 56H88a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0v-40h20.69l36 36-14.35 14.34a8 8 0 0 0 11.32 11.32L164 183.31l14.34 14.35a8 8 0 0 0 11.32-11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPrescriptionFill))
export { Memo as IconPrescriptionFill }
