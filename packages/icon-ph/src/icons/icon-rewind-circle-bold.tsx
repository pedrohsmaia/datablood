/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRewindCircleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m52-112v56a12 12 0 0 1-19.37 9.47l-36-28c-.22-.17-.42-.36-.63-.55V156a12 12 0 0 1-19.37 9.47l-36-28a12 12 0 0 1 0-18.94l36-28A12 12 0 0 1 124 100v19.08c.21-.19.41-.38.63-.55l36-28A12 12 0 0 1 180 100"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRewindCircleBold))
export { Memo as IconRewindCircleBold }
