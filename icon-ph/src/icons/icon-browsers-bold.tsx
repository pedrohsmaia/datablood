/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrowsersBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 32H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-20h20a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20m-44 64v16H40V96Zm0 104H40v-64h136Zm40-40h-16V92a20 20 0 0 0-20-20H80V56h136Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrowsersBold))
export { Memo as IconBrowsersBold }
