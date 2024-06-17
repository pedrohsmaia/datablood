/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendRightDownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m205.66 181.66-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 104 168h40v-40a88.1 88.1 0 0 0-88-88 8 8 0 0 1 0-16 104.11 104.11 0 0 1 104 104v40h40a8 8 0 0 1 5.66 13.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendRightDownFill))
export { Memo as IconArrowBendRightDownFill }
