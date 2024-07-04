/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTextThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.17 12.17 0 0 0 40 236a11.89 11.89 0 0 0 7.69-2.83l.06-.06 32.14-28.17a4 4 0 0 1 2.61-.94H216a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H82.5a12.1 12.1 0 0 0-7.79 2.87l-32.16 28.2A4 4 0 0 1 36 224V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-56-80a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTextThin))
export { Memo as IconChatTextThin }
