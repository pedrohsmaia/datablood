/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSignInLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m140.24 132.24-40 40a6 6 0 0 1-8.48-8.48L121.51 134H24a6 6 0 0 1 0-12h97.51L91.76 92.24a6 6 0 0 1 8.48-8.48l40 40a6 6 0 0 1 0 8.48M192 34h-56a6 6 0 0 0 0 12h56a2 2 0 0 1 2 2v160a2 2 0 0 1-2 2h-56a6 6 0 0 0 0 12h56a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSignInLight))
export { Memo as IconSignInLight }
