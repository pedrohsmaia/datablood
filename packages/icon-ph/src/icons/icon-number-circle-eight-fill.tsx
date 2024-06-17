/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleEightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M148 152a20 20 0 1 1-20-20 20 20 0 0 1 20 20m-20-36a16 16 0 1 0-16-16 16 16 0 0 0 16 16m104 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-68 24a35.93 35.93 0 0 0-14.19-28.61 32 32 0 1 0-43.62 0A36 36 0 1 0 164 152"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleEightFill))
export { Memo as IconNumberCircleEightFill }
