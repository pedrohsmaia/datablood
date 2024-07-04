/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStickerBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 28H88a60.07 60.07 0 0 0-60 60v80a60.07 60.07 0 0 0 60 60h48a11.9 11.9 0 0 0 3.79-.62c27.63-9.21 78.38-60 87.59-87.59A11.9 11.9 0 0 0 228 136V88a60.07 60.07 0 0 0-60-60M52 168V88a36 36 0 0 1 36-36h80a36 36 0 0 1 36 36v36h-20a60.07 60.07 0 0 0-60 60v20H88a36 36 0 0 1-36-36m96 27.63V184a36 36 0 0 1 36-36h11.63C184 164.11 164.11 184 148 195.63"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStickerBold))
export { Memo as IconStickerBold }
