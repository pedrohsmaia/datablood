/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandFistThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 84h-20V64a28 28 0 0 0-52-14.41A28 28 0 0 0 76 64v4.43A28 28 0 0 0 28 88v40a100 100 0 0 0 200 0v-16a28 28 0 0 0-28-28m-48-40a20 20 0 0 1 20 20v20h-36a11.8 11.8 0 0 0-4 .7V64a20 20 0 0 1 20-20M84 64a20 20 0 0 1 40 0v40a20 20 0 0 1-40 0ZM36 88a20 20 0 0 1 40 0v16a20 20 0 0 1-40 0Zm184 40a92 92 0 0 1-184 0v-4.42a28 28 0 0 0 44-5.17 28 28 0 0 0 45.73 3.23 28.11 28.11 0 0 0 18.59 17.29A44 44 0 0 0 124 176a4 4 0 0 0 8 0 36 36 0 0 1 36-36 4 4 0 0 0 0-8h-16a20 20 0 0 1-20-20V96a4 4 0 0 1 4-4h64a20 20 0 0 1 20 20Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHandFistThin))
export { Memo as IconHandFistThin }
