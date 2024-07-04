/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendLeftDownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32a8 8 0 0 1-8 8 88.1 88.1 0 0 0-88 88v40h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 56 168h40v-40A104.11 104.11 0 0 1 200 24a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendLeftDownFill))
export { Memo as IconArrowBendLeftDownFill }
