/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBathtubFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 96h-16a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8H64V52a12 12 0 0 1 12-12 12.44 12.44 0 0 1 12.16 9.59 8 8 0 0 0 15.68-3.18A28.32 28.32 0 0 0 76 24a28 28 0 0 0-28 28v44H24a16 16 0 0 0-16 16v32a56.06 56.06 0 0 0 56 56v16a8 8 0 0 0 16 0v-16h96v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 0 56-56v-32a16 16 0 0 0-16-16m-32 48h-56v-40h56Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBathtubFill))
export { Memo as IconBathtubFill }
