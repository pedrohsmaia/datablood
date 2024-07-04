/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRoadHorizonFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M239 188.08 173.68 72h58a8.17 8.17 0 0 0 8.32-7.47 8 8 0 0 0-8-8.53H24.27A8.17 8.17 0 0 0 16 63.47 8 8 0 0 0 24 72h58.32L17 188.08a8 8 0 0 0 1.17 9.43 8.24 8.24 0 0 0 6 2.49H116a4 4 0 0 0 4-4v-19.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v20a4 4 0 0 0 4 4h91.77a8.24 8.24 0 0 0 6-2.49 8 8 0 0 0 1.23-9.45M136 140a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-52a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRoadHorizonFill))
export { Memo as IconRoadHorizonFill }
