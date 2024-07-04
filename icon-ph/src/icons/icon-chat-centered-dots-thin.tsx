/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatCenteredDotsThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h59.47a4 4 0 0 1 3.43 1.94l14.79 24.2a12 12 0 0 0 20.56 0l14.83-24.26a4 4 0 0 1 3.43-1.94H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4h-59.47a12 12 0 0 0-10.27 5.8l-14.83 24.26a4 4 0 0 1-6.88 0l-14.8-24.22A12 12 0 0 0 99.47 188H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-84-64a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-44 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatCenteredDotsThin))
export { Memo as IconChatCenteredDotsThin }
