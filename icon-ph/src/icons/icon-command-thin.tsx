/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCommandThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180 148h-24v-40h24a32 32 0 1 0-32-32v24h-40V76a32 32 0 1 0-32 32h24v40H76a32 32 0 1 0 32 32v-24h40v24a32 32 0 1 0 32-32m-24-72a24 24 0 1 1 24 24h-24ZM52 76a24 24 0 0 1 48 0v24H76a24 24 0 0 1-24-24m48 104a24 24 0 1 1-24-24h24Zm8-72h40v40h-40Zm72 96a24 24 0 0 1-24-24v-24h24a24 24 0 0 1 0 48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCommandThin))
export { Memo as IconCommandThin }
