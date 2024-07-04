/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNewspaperFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 48H56a16 16 0 0 0-16 16v120a8 8 0 0 1-16 0V88a8 8 0 0 0-16 0v96.11A24 24 0 0 0 32 208h176a24 24 0 0 0 24-24V64a16 16 0 0 0-16-16m-40 104H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNewspaperFill))
export { Memo as IconNewspaperFill }
