/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBridgeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 164h-36V88.09a67.81 67.81 0 0 0 34.5 31 4 4 0 1 0 3-7.42A59.77 59.77 0 0 1 196 56a4 4 0 0 0-8 0 60 60 0 0 1-120 0 4 4 0 0 0-8 0 59.77 59.77 0 0 1-37.5 55.64 4 4 0 0 0 3 7.42 67.81 67.81 0 0 0 34.5-31V164H24a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h120v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8m-84-43v43h-40v-43a68 68 0 0 0 40 0M68 88a68.43 68.43 0 0 0 32 30v46H68Zm88 76v-46a68.43 68.43 0 0 0 32-30v76Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBridgeThin))
export { Memo as IconBridgeThin }
