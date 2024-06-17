/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHoodieFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m238.66 123.56-56.3-84.44A16 16 0 0 0 169.05 32H87a16 16 0 0 0-13.31 7.12l-56.3 84.44a8 8 0 0 0-1.06 6.54l22.39 82.11A16 16 0 0 0 54.11 224H80a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h25.89a16 16 0 0 0 15.44-11.79l22.39-82.11a8 8 0 0 0-1.06-6.54M80 208H54.11l-21.43-78.59L64 82.42V176a16 16 0 0 0 16 16Zm40-72a8 8 0 0 1-16 0V94.86a8 8 0 0 1 16 0Zm32-8a8 8 0 0 1-16 0V94.86a8 8 0 0 1 16 0Zm-24-49.21L83.41 53.31 87 48h82.1l3.54 5.31ZM201.89 208H176v-16a16 16 0 0 0 16-16V82.42l31.32 47Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHoodieFill))
export { Memo as IconHoodieFill }
