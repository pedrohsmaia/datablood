/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHardDriveThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 68H32a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 108a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-32-48a8 8 0 1 1-8-8 8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHardDriveThin))
export { Memo as IconHardDriveThin }
