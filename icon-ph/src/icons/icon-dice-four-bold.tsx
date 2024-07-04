/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDiceFourBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-92-96a16 16 0 1 1-16-16 16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-64 64a16 16 0 1 1-16-16 16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDiceFourBold))
export { Memo as IconDiceFourBold }
