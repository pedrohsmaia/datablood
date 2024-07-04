/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookmarkLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M184 34H72a14 14 0 0 0-14 14v176a6 6 0 0 0 9.18 5.09l60.81-38 60.83 38A6 6 0 0 0 198 224V48a14 14 0 0 0-14-14M72 46h112a2 2 0 0 1 2 2v117.18l-54.83-34.27a6 6 0 0 0-6.36 0L70 165.17V48a2 2 0 0 1 2-2m59.17 132.91a6 6 0 0 0-6.36 0L70 213.17v-33.84l58-36.25 58 36.25v33.84Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookmarkLight))
export { Memo as IconBookmarkLight }
