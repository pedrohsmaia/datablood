/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrowsersThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 84h144a4 4 0 0 1 4 4v20H36V88a4 4 0 0 1 4-4m148 116a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h152Zm32-32a4 4 0 0 1-4 4h-20V88a12 12 0 0 0-12-12H68V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrowsersThin))
export { Memo as IconBrowsersThin }
