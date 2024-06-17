/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircuitryFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m88 111.31 48 48V220a4 4 0 0 1-4 4H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h20a4 4 0 0 1 4 4v117.38a24 24 0 1 0 16 0ZM80 184a8 8 0 1 0-8-8 8 8 0 0 0 8 8m104-80a8 8 0 1 0-8 8 8 8 0 0 0 8-8m24-72h-52a4 4 0 0 0-4 4v32.69l13.66 13.66a24 24 0 1 1-11.31 11.31l-16-16A8 8 0 0 1 136 72V36a4 4 0 0 0-4-4H92a4 4 0 0 0-4 4v52.69l61.66 61.65A8 8 0 0 1 152 156v64a4 4 0 0 0 4 4h52a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircuitryFill))
export { Memo as IconCircuitryFill }
