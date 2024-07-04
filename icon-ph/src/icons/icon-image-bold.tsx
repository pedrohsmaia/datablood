/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconImageBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 96a16 16 0 1 1 16 16 16 16 0 0 1-16-16m92-40v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20M44 60v79.72l33.86-33.86a20 20 0 0 1 28.28 0L147.31 147l17.18-17.17a20 20 0 0 1 28.28 0L212 149.09V60Zm0 136h118.34L92 125.66l-48 48Zm168 0v-13l-33.37-33.37L164.28 164l32 32Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconImageBold))
export { Memo as IconImageBold }
