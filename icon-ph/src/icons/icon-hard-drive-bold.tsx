/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHardDriveBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 112H36V84h184Zm-56-44a16 16 0 1 1 16 16 16 16 0 0 1-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHardDriveBold))
export { Memo as IconHardDriveBold }
