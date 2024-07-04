/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHardDriveLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 66H32a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Zm-28-48a10 10 0 1 1-10-10 10 10 0 0 1 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHardDriveLight))
export { Memo as IconHardDriveLight }
