/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileTsxBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M221.76 201a12 12 0 1 1-19.53 14L192 200.62 181.76 215a12 12 0 1 1-19.53-14l15-21-15-21a12 12 0 0 1 19.53-14L192 159.34 202.23 145a12 12 0 0 1 19.53 14l-15 21Zm-80.25-26.73c-5.12-3.45-11.33-5.24-16.8-6.82a79.5 79.5 0 0 1-7.91-2.59c2.45-1.18 9.71-1.3 16.07.33A12 12 0 0 0 139 142a69 69 0 0 0-12-1.86c-9.93-.66-18 1.08-24.1 5.17a24.45 24.45 0 0 0-10.69 17.76c-1.1 8.74 2.48 16.27 10.11 21.19 4.78 3.09 10.36 4.7 15.75 6.26 3 .89 7.94 2.3 9.88 3.53a2.48 2.48 0 0 1-.21.71c-1.37 1.55-9.58 1.79-16.39-.06a12 12 0 1 0-6.46 23.11A63.75 63.75 0 0 0 121.1 220c6.46 0 13.73-1.17 19.73-5.15a24.73 24.73 0 0 0 10.95-18c1.22-9.32-2.45-17.32-10.27-22.58M76 140H36a12 12 0 0 0 0 24h8v44a12 12 0 0 0 24 0v-44h8a12 12 0 0 0 0-24m-40-32V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0m124-28h23l-23-23Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileTsxBold))
export { Memo as IconFileTsxBold }
