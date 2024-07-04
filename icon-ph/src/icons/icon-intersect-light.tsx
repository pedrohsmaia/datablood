/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconIntersectLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172.91 83.09a78 78 0 1 0-89.82 89.82 78 78 0 1 0 89.82-89.82M30 96a66 66 0 0 1 130.49-14H160a78.09 78.09 0 0 0-78 78v.49A66.1 66.1 0 0 1 30 96m64 64a65.62 65.62 0 0 1 6-27.49L123.49 156A65.62 65.62 0 0 1 96 162c-.65 0-1.3 0-2-.05zm40.23-10.25-28-28a66.47 66.47 0 0 1 15.52-15.52l28 28a66.47 66.47 0 0 1-15.52 15.52M162 96a65.62 65.62 0 0 1-6 27.49L132.51 100A65.62 65.62 0 0 1 160 94h1.95c.05.7.05 1.35.05 2m-2 130a66.1 66.1 0 0 1-64.49-52H96a78.09 78.09 0 0 0 78-78v-.49A66 66 0 0 1 160 226"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconIntersectLight))
export { Memo as IconIntersectLight }
