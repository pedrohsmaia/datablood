/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSimCardFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M200 216H56V40h92.69L200 91.31zm-16-96v72a8 8 0 0 1-8 8h-20a4 4 0 0 1-4-4v-44a8 8 0 0 0-8.53-8 8.17 8.17 0 0 0-7.47 8.25V196a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-44a8 8 0 0 0-8.53-8 8.17 8.17 0 0 0-7.47 8.25V196a4 4 0 0 1-4 4H80a8 8 0 0 1-8-8v-72a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSimCardFill))
export { Memo as IconSimCardFill }
