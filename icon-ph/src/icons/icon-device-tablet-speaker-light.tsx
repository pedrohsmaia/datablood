/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceTabletSpeakerLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22m10 182a10 10 0 0 1-10 10H64a10 10 0 0 1-10-10V48a10 10 0 0 1 10-10h128a10 10 0 0 1 10 10ZM166 64a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceTabletSpeakerLight))
export { Memo as IconDeviceTabletSpeakerLight }
