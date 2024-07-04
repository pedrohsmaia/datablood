/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVideoCamera = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95-32-21.33v-23.44L240 95Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVideoCamera))
export { Memo as IconVideoCamera }
