/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudArrowUpThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 128a83.28 83.28 0 0 1-16.8 50.4 4 4 0 1 1-6.4-4.8A76 76 0 1 0 84 128a4 4 0 0 1-8 0 83.45 83.45 0 0 1 4.57-27.27A52 52 0 1 0 72 204h24a4 4 0 0 1 0 8H72A60 60 0 1 1 83.61 93.13 84 84 0 0 1 244 128m-89.17-2.83a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L148 137.66V208a4 4 0 0 0 8 0v-70.34l25.17 25.17a4 4 0 0 0 5.66-5.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudArrowUpThin))
export { Memo as IconCloudArrowUpThin }
