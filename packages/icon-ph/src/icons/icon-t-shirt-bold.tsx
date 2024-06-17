/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTShirtBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m246.17 57.9-48.08-28.25A11.9 11.9 0 0 0 192 28h-32a12 12 0 0 0-12 12 20 20 0 0 1-40 0 12 12 0 0 0-12-12H64a11.9 11.9 0 0 0-6.07 1.66L9.83 57.9A20.18 20.18 0 0 0 2 84l17.9 36.8A19.62 19.62 0 0 0 37.67 132H52v76a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-76h14.32a19.64 19.64 0 0 0 17.75-11.17L254 84a20.18 20.18 0 0 0-7.83-26.1M40.37 108 25.16 76.73 52 61v47ZM180 204H76V52h9.67a44 44 0 0 0 84.68 0H180Zm35.62-96H204V61l26.83 15.76Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTShirtBold))
export { Memo as IconTShirtBold }
