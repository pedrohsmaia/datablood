/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHTwoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m92 148h-40l38.36-51.15a28 28 0 1 0-48.77-26.18 4 4 0 1 0 7.54 2.66A20.36 20.36 0 0 1 200 124a20 20 0 0 1 32 24l-43.2 57.6a4 4 0 0 0 3.2 6.4h48a4 4 0 0 0 0-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHTwoThin))
export { Memo as IconTextHTwoThin }
