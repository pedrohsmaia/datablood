/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartPieBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a84 84 0 0 1 54 31.2l-54 31.15Zm-90 114.3a83.94 83.94 0 0 1 66-114.3v76.2ZM128 212a83.88 83.88 0 0 1-65.95-32.07L206 96.83A84 84 0 0 1 128 212"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartPieBold))
export { Memo as IconChartPieBold }
