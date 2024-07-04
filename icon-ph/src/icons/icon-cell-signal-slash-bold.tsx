/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCellSignalSlashBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 152v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12m176.88 27.93-160-176a12 12 0 1 0-17.76 16.14L108 123.84V200a12 12 0 0 0 24 0v-49.76l16 17.6V200a12 12 0 0 0 24 0v-5.76l27.12 29.83a12 12 0 0 0 17.76-16.14M160 115.74a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v31.74a12 12 0 0 0 12 12m40 44a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v115.74a12 12 0 0 0 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCellSignalSlashBold))
export { Memo as IconCellSignalSlashBold }
