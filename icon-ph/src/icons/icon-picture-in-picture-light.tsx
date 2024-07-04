/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPictureInPictureLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M38 192V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v58h-74a14 14 0 0 0-14 14v58H40a2 2 0 0 1-2-2m178 2h-74v-58a2 2 0 0 1 2-2h74v58a2 2 0 0 1-2 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPictureInPictureLight))
export { Memo as IconPictureInPictureLight }
