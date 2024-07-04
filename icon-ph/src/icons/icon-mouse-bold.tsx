/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMouseBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 68v20h-48V36h4a44.05 44.05 0 0 1 44 44m-76-44h4v64H68V80a44.05 44.05 0 0 1 44-44m32 184h-32a44.05 44.05 0 0 1-44-44v-52h120v52a44.05 44.05 0 0 1-44 44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMouseBold))
export { Memo as IconMouseBold }
