/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrowsersLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 86h144a2 2 0 0 1 2 2v18H38V88a2 2 0 0 1 2-2m146 114a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h148Zm32-32a2 2 0 0 1-2 2h-18V88a14 14 0 0 0-14-14H70V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrowsersLight))
export { Memo as IconBrowsersLight }
