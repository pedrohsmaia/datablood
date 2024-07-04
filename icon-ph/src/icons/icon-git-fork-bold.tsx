/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitForkBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 64a36 36 0 1 0-48 33.94V104a12 12 0 0 1-12 12H88a12 12 0 0 1-12-12v-6.06a36 36 0 1 0-24 0V104a36 36 0 0 0 36 36h28v18.06a36 36 0 1 0 24 0V140h28a36 36 0 0 0 36-36v-6.06A36.07 36.07 0 0 0 228 64M64 52a12 12 0 1 1-12 12 12 12 0 0 1 12-12m64 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12m64-128a12 12 0 1 1 12-12 12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitForkBold))
export { Memo as IconGitForkBold }
