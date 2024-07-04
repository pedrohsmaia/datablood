/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLadderSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 26a6 6 0 0 0-6 6v34H70V32a6 6 0 0 0-12 0v192a6 6 0 0 0 12 0v-34h116v34a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-6 52v44H70V78ZM70 178v-44h116v44Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLadderSimpleLight))
export { Memo as IconLadderSimpleLight }
