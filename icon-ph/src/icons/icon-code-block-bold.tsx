/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodeBlockBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m51.51 104.49-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L45 64l23.49 23.51a12 12 0 0 1-17 17Zm48 0a12 12 0 0 0 17 0l32-32a12 12 0 0 0 0-17l-32-32a12 12 0 1 0-17 17L123 64 99.51 87.51a12 12 0 0 0 0 16.98M200 36h-20a12 12 0 0 0 0 24h16v136H60v-56a12 12 0 0 0-24 0v60a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodeBlockBold))
export { Memo as IconCodeBlockBold }
