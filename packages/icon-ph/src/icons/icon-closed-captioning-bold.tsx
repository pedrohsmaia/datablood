/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClosedCaptioningBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H36V68h184ZM52 128a44 44 0 0 1 66-38.11 12 12 0 0 1-12 20.78 20 20 0 1 0 0 34.66 12 12 0 1 1 12 20.77A44 44 0 0 1 52 128m80 0a44 44 0 0 1 66-38.11 12 12 0 0 1-12 20.78 20 20 0 1 0 0 34.66 12 12 0 1 1 12 20.77 44 44 0 0 1-66-38.1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconClosedCaptioningBold))
export { Memo as IconClosedCaptioningBold }
