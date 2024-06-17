/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesThreeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M170 76a42 42 0 1 0-42 42 42 42 0 0 0 42-42m-42 30a30 30 0 1 1 30-30 30 30 0 0 1-30 30m60 24a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30 30 30 0 0 1-30 30M68 130a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30 30 30 0 0 1-30 30"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesThreeLight))
export { Memo as IconCirclesThreeLight }
