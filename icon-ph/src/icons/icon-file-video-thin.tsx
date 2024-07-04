/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileVideoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M146.12 156.61a4 4 0 0 0-3.88-.2L116 169.26V168a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-2.2l26.14 13.74a4 4 0 0 0 3.93-.12A4 4 0 0 0 148 216v-56a4 4 0 0 0-1.88-3.39M108 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4Zm32 1.38-24-12.62v-18.59l24-11.76Zm70.83-124.21-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65 198.34 84H156Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileVideoThin))
export { Memo as IconFileVideoThin }
