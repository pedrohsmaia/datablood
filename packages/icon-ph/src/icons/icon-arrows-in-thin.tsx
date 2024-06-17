/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsInThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M148 104V64a4 4 0 0 1 8 0v30.34l49.17-49.17a4 4 0 1 1 5.66 5.66L161.66 100H192a4 4 0 0 1 0 8h-40a4 4 0 0 1-4-4m-44 44H64a4 4 0 0 0 0 8h30.34l-49.17 49.17a4 4 0 0 0 5.66 5.66L100 161.66V192a4 4 0 0 0 8 0v-40a4 4 0 0 0-4-4m57.66 8H192a4 4 0 0 0 0-8h-40a4 4 0 0 0-4 4v40a4 4 0 0 0 8 0v-30.34l49.17 49.17a4 4 0 0 0 5.66-5.66ZM104 60a4 4 0 0 0-4 4v30.34L50.83 45.17a4 4 0 0 0-5.66 5.66L94.34 100H64a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsInThin))
export { Memo as IconArrowsInThin }
