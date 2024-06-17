/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArticleNyTimesThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M156 104a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8h-80a4 4 0 0 1-4-4m84 28h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m0 32h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m0 32H72a4 4 0 0 0 0 8h168a4 4 0 0 0 0-8M80 172a51.94 51.94 0 0 1-46.8-74.59A24 24 0 0 1 44 52a4 4 0 0 1 1.94.5L117 92a16 16 0 0 0-1-32 4 4 0 0 1 0-8 24 24 0 0 1 0 48 4 4 0 0 1-1.94-.5L72.83 76.59A44 44 0 0 0 76 163.81V120a4 4 0 0 1 8 0v43.81a44.1 44.1 0 0 0 37.5-29.14 4 4 0 0 1 7.54 2.66A52.09 52.09 0 0 1 80 172M37.24 90.5A52.1 52.1 0 0 1 62.7 71L43 60a16 16 0 0 0-5.76 30.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArticleNyTimesThin))
export { Memo as IconArticleNyTimesThin }
