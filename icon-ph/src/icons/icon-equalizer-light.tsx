/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEqualizerLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M78 96a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6 26H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-64h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-48-20h48a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12m48 52h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEqualizerLight))
export { Memo as IconEqualizerLight }
