/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileySadBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16 16 16 0 0 1-16-16m104 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-3.26 57a12 12 0 0 1-19.48 14 36 36 0 0 0-58.52 0 12 12 0 0 1-19.48-14 60 60 0 0 1 97.48 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSmileySadBold))
export { Memo as IconSmileySadBold }
