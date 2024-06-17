/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPawPrintLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 82a26 26 0 1 0 26 26 26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14 14 14 0 0 1-14 14M70 108a26 26 0 1 0-26 26 26 26 0 0 0 26-26m-26 14a14 14 0 1 1 14-14 14 14 0 0 1-14 14m48-36a26 26 0 1 0-26-26 26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14m72 40a26 26 0 1 0-26-26 26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14m22.15 104.61a37.32 37.32 0 0 1-17.82-22.33 42 42 0 0 0-80.66 0 37.26 37.26 0 0 1-17.77 22.3A38 38 0 0 0 88 222a37.58 37.58 0 0 0 14.76-3 66.14 66.14 0 0 1 50.41 0 37.66 37.66 0 0 0 14.83 3 38 38 0 0 0 18.15-71.39M168 210a25.93 25.93 0 0 1-10.21-2.08 78.15 78.15 0 0 0-59.65 0 26 26 0 0 1-22.46-46.82 49.28 49.28 0 0 0 23.51-29.48 30 30 0 0 1 57.62 0 49.27 49.27 0 0 0 23.57 29.5A26 26 0 0 1 168 210"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPawPrintLight))
export { Memo as IconPawPrintLight }
