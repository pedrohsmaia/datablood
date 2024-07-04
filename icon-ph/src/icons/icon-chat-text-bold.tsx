/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTextBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H40a20 20 0 0 0-20 20v160a19.82 19.82 0 0 0 11.56 18.1 20.14 20.14 0 0 0 8.49 1.9 19.91 19.91 0 0 0 12.82-4.72l.19-.16L84 212h132a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H82.5a20 20 0 0 0-12.87 4.69l-.19.16L44 215.14V68h168ZM84 108a12 12 0 0 1 12-12h64a12 12 0 1 1 0 24H96a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTextBold))
export { Memo as IconChatTextBold }
