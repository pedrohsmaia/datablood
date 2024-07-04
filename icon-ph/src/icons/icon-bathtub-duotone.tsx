/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBathtubDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M240 112v32a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48v-32a8 8 0 0 1 8-8h112v40h64v-40h32a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M232 96h-24a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8H64V52a12 12 0 0 1 12-12 12.44 12.44 0 0 1 12.16 9.59 8 8 0 0 0 15.68-3.18A28.32 28.32 0 0 0 76 24a28 28 0 0 0-28 28v44H24a16 16 0 0 0-16 16v32a56.06 56.06 0 0 0 56 56v16a8 8 0 0 0 16 0v-16h96v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 0 56-56v-32a16 16 0 0 0-16-16m-40 8v32h-48v-32Zm40 40a40 40 0 0 1-40 40H64a40 40 0 0 1-40-40v-32h104v32a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-32h24Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBathtubDuotone))
export { Memo as IconBathtubDuotone }
