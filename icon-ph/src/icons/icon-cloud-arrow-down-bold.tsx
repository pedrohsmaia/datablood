/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudArrowDownBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M252 128a91.18 91.18 0 0 1-18.41 55.21 12 12 0 0 1-19.18-14.42A68 68 0 1 0 92 128a12 12 0 0 1-24 0 91.7 91.7 0 0 1 2.19-20A44 44 0 0 0 72 196h24a12 12 0 0 1 0 24H72a68 68 0 1 1 7-135.63A92 92 0 0 1 252 128m-76.49 39.51L164 179v-51a12 12 0 0 0-24 0v51l-11.51-11.52a12 12 0 1 0-17 17l32 32a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudArrowDownBold))
export { Memo as IconCloudArrowDownBold }
