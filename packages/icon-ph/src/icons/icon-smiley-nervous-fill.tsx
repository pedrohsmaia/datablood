/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileyNervousFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m36 72a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-72 0a12 12 0 1 1-12 12 12 12 0 0 1 12-12m89.66 77.66a8 8 0 0 1-11.32 0L160 163.31l-10.34 10.35a8 8 0 0 1-11.32 0L128 163.31l-10.34 10.35a8 8 0 0 1-11.32 0L96 163.31l-10.34 10.35a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 0L112 156.69l10.34-10.35a8 8 0 0 1 11.32 0L144 156.69l10.34-10.35a8 8 0 0 1 11.32 0l16 16a8 8 0 0 1 0 11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSmileyNervousFill))
export { Memo as IconSmileyNervousFill }
