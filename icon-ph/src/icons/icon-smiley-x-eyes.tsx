/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileyXEyes = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m61.66-93.66a8 8 0 0 1-11.32 11.32L168 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L168 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 112Zm-80-20.68L99.31 112l10.35 10.34a8 8 0 0 1-11.32 11.32L88 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L76.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L88 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32M140 180a12 12 0 1 1-12-12 12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSmileyXEyes))
export { Memo as IconSmileyXEyes }
