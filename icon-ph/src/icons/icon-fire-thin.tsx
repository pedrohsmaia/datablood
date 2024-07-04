/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFireThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M179.94 152.67a53.51 53.51 0 0 1-43.28 43.27 3.68 3.68 0 0 1-.66.06 4 4 0 0 1-.66-7.94c18.18-3.06 33.63-18.51 36.72-36.73a4 4 0 0 1 7.88 1.34M212 144a84 84 0 0 1-168 0c0-27 10.71-54.75 31.84-82.43a4 4 0 0 1 6-.44l28.55 27.7 24.15-66.2a4 4 0 0 1 6.31-1.71C162.22 38.69 212 86.24 212 144m-8 0c0-50.82-41.73-93.91-63.94-113.23l-24.3 66.6a4 4 0 0 1-6.55 1.5L79.5 70C61.25 95.07 52 119.93 52 144a76 76 0 0 0 152 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFireThin))
export { Memo as IconFireThin }
