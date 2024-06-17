/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCornersInDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 96h-48V48ZM96 208v-48H48Zm64 0 48-48h-48ZM96 96V48L48 96Z"
          opacity={0.2}
        />
        <Path d="M160 104h48a8 8 0 0 0 5.66-13.66l-48-48A8 8 0 0 0 152 48v48a8 8 0 0 0 8 8m8-36.69L188.69 88H168ZM96 152H48a8 8 0 0 0-5.66 13.66l48 48A8 8 0 0 0 104 208v-48a8 8 0 0 0-8-8m-8 36.69L67.31 168H88ZM208 152h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 13.66 5.66l48-48A8 8 0 0 0 208 152m-40 36.69V168h20.69ZM99.06 40.61a8 8 0 0 0-8.72 1.73l-48 48A8 8 0 0 0 48 104h48a8 8 0 0 0 8-8V48a8 8 0 0 0-4.94-7.39M88 88H67.31L88 67.31Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCornersInDuotone))
export { Memo as IconCornersInDuotone }
