/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTagChevronFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m237.3 136.88-42.66 64a16 16 0 0 1-13.31 7.12H24a8 8 0 0 1-6.58-12.55L64 128 17.42 60.55A8 8 0 0 1 24 48h157.33a16 16 0 0 1 13.31 7.12l42.66 64a16 16 0 0 1 0 17.76"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTagChevronFill))
export { Memo as IconTagChevronFill }
