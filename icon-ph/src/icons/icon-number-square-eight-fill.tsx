/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareEightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M112 100a16 16 0 1 1 16 16 16 16 0 0 1-16-16m16 32a20 20 0 1 0 20 20 20 20 0 0 0-20-20m96-84v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-60 104a35.93 35.93 0 0 0-14.19-28.61 32 32 0 1 0-43.62 0A36 36 0 1 0 164 152"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareEightFill))
export { Memo as IconNumberSquareEightFill }
