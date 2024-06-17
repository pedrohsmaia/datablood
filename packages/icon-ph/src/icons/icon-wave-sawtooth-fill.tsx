/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveSawtoothFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-11.56 94.66-72 48A8 8 0 0 1 128 184a8 8 0 0 1-8-8V95l-59.56 39.66a8 8 0 1 1-8.88-13.32l72-48A8 8 0 0 1 136 80v81.05l59.56-39.71a8 8 0 0 1 8.88 13.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWaveSawtoothFill))
export { Memo as IconWaveSawtoothFill }
