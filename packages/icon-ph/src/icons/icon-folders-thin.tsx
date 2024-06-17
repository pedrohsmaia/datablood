/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFoldersThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 68h-69.33a4 4 0 0 1-2.4-.8l-27.74-20.8a12.05 12.05 0 0 0-7.2-2.4H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h152.89A11.12 11.12 0 0 0 204 200.89V180h20.89A11.12 11.12 0 0 0 236 168.89V80a12 12 0 0 0-12-12m-28 132.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l27.74 20.8a12.05 12.05 0 0 0 7.2 2.4H192a4 4 0 0 1 4 4Zm32-32a3.12 3.12 0 0 1-3.11 3.11H204v-60a12 12 0 0 0-12-12h-69.33a4 4 0 0 1-2.4-.8L92.53 78.4a12.05 12.05 0 0 0-7.2-2.4H68V56a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l27.74 20.8a12.05 12.05 0 0 0 7.2 2.4H224a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFoldersThin))
export { Memo as IconFoldersThin }
