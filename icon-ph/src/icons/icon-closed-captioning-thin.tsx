/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClosedCaptioningThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-112.54-38.29a4 4 0 0 1-1.46 5.47 36 36 0 1 1 0-62.36 4 4 0 0 1-4 6.92 28 28 0 1 0 0 48.52 4 4 0 0 1 5.46 1.45m80 0a4 4 0 0 1-1.46 5.47 36 36 0 1 1 0-62.36 4 4 0 0 1-4 6.92 28 28 0 1 0 0 48.52 4 4 0 0 1 5.46 1.45"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconClosedCaptioningThin))
export { Memo as IconClosedCaptioningThin }
