/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudCheckThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.71 60.71 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.66 83.66 0 0 0 76 128a4 4 0 0 0 8 0 76 76 0 1 1 76 76m34.83-94.83a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L144 154.34l45.17-45.17a4 4 0 0 1 5.66 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudCheckThin))
export { Memo as IconCloudCheckThin }
