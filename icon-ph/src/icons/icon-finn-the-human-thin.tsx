/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFinnTheHumanThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 100H88a36 36 0 0 0-36 36v8a36 36 0 0 0 36 36h80a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36m28 44a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28v-8a28 28 0 0 1 28-28h80a28 28 0 0 1 28 28Zm12-108a28 28 0 0 0-27.71 24H75.71A28 28 0 0 0 20 64v80a68.07 68.07 0 0 0 68 68h80a68.07 68.07 0 0 0 68-68V64a28 28 0 0 0-28-28m20 108a60.07 60.07 0 0 1-60 60H88a60.07 60.07 0 0 1-60-60V64a20 20 0 0 1 40 0 4 4 0 0 0 4 4h112a4 4 0 0 0 4-4 20 20 0 0 1 40 0Zm-128-4a8 8 0 1 1-8-8 8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFinnTheHumanThin))
export { Memo as IconFinnTheHumanThin }
