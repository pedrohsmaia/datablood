/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLadderSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 24a8 8 0 0 0-8 8v8H72v-8a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-8h112v8a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-16 160H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLadderSimpleFill))
export { Memo as IconLadderSimpleFill }
