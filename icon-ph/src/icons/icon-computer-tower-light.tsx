/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconComputerTowerLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M166 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m46-58v176a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h128a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h128a2 2 0 0 0 2-2Zm-66 130a10 10 0 1 0 10 10 10 10 0 0 0-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconComputerTowerLight))
export { Memo as IconComputerTowerLight }
