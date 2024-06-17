/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleDashedFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m54.59 45a8 8 0 0 1 11.29.7 88 88 0 0 1 17.6 30.47 8 8 0 0 1-15.18 5.08 71.87 71.87 0 0 0-14.4-25 8 8 0 0 1 .69-11.25M73.41 187.05a8 8 0 0 1-11.29-.7 88 88 0 0 1-17.6-30.47 8 8 0 1 1 15.18-5.08 71.87 71.87 0 0 0 14.4 24.95 8 8 0 0 1-.69 11.3m.69-106.8a71.87 71.87 0 0 0-14.4 25 8 8 0 1 1-15.18-5.08 88 88 0 0 1 17.6-30.47 8 8 0 1 1 12 10.6Zm71.49 134a87.8 87.8 0 0 1-35.18 0 8 8 0 0 1 3.18-15.68 72.08 72.08 0 0 0 28.82 0 8 8 0 0 1 3.18 15.68m6.25-163a8 8 0 0 1-7.84 6.36 7.89 7.89 0 0 1-1.6-.16 72.08 72.08 0 0 0-28.82 0 8 8 0 1 1-3.18-15.68 87.92 87.92 0 0 1 35.18 0 8 8 0 0 1 6.26 9.43Zm59.64 104.68a88 88 0 0 1-17.6 30.47 8 8 0 1 1-12-10.6 71.87 71.87 0 0 0 14.4-24.95 8 8 0 0 1 15.18 5.08Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleDashedFill))
export { Memo as IconCircleDashedFill }
