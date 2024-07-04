/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSignInBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m144.49 136.49-40 40a12 12 0 0 1-17-17L107 140H24a12 12 0 0 1 0-24h83L87.51 96.49a12 12 0 0 1 17-17l40 40a12 12 0 0 1-.02 17M192 28h-56a12 12 0 0 0 0 24h52v152h-52a12 12 0 0 0 0 24h56a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSignInBold))
export { Memo as IconSignInBold }
