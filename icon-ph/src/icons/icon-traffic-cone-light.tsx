/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrafficConeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 210h-19.73L151.54 35.4a14 14 0 0 0-13.23-9.4h-20.62a14 14 0 0 0-13.23 9.4L43.73 210H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M94 102h68l18.08 52H75.92Zm21.8-62.66a2 2 0 0 1 1.89-1.34h20.62a2 2 0 0 1 1.89 1.34L157.82 90H98.18ZM71.74 166h112.52l15.3 44H56.44Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrafficConeLight))
export { Memo as IconTrafficConeLight }
