/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserFocusLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 48v28a6 6 0 0 1-12 0V48a2 2 0 0 0-2-2h-28a6 6 0 0 1 0-12h28a14 14 0 0 1 14 14m-6 126a6 6 0 0 0-6 6v28a2 2 0 0 1-2 2h-28a6 6 0 0 0 0 12h28a14 14 0 0 0 14-14v-28a6 6 0 0 0-6-6M76 210H48a2 2 0 0 1-2-2v-28a6 6 0 0 0-12 0v28a14 14 0 0 0 14 14h28a6 6 0 0 0 0-12M40 82a6 6 0 0 0 6-6V48a2 2 0 0 1 2-2h28a6 6 0 0 0 0-12H48a14 14 0 0 0-14 14v28a6 6 0 0 0 6 6m136 92a6 6 0 0 1-4.8-2.4 54 54 0 0 0-86.4 0 6 6 0 1 1-9.6-7.2 65.65 65.65 0 0 1 29.69-22.26 38 38 0 1 1 46.22 0 65.65 65.65 0 0 1 29.69 22.26 6 6 0 0 1-4.8 9.6m-48-36a26 26 0 1 0-26-26 26 26 0 0 0 26 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserFocusLight))
export { Memo as IconUserFocusLight }
