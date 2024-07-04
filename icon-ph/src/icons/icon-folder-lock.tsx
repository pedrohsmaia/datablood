/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderLock = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 160h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4h-24Zm40 44h-56v-24h56Zm0-128h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderLock))
export { Memo as IconFolderLock }
