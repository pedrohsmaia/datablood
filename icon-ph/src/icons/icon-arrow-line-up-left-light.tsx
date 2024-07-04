/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineUpLeftLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M64 158a6 6 0 0 0 6-6V70.49l101.76 101.75a6 6 0 0 0 8.48-8.48L78.49 62H160a6 6 0 0 0 0-12H64a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineUpLeftLight))
export { Memo as IconArrowLineUpLeftLight }
