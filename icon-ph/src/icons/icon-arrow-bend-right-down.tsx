/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendRightDown = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m205.66 181.66-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L144 204.69V128a88.1 88.1 0 0 0-88-88 8 8 0 0 1 0-16 104.11 104.11 0 0 1 104 104v76.69l34.34-34.35a8 8 0 0 1 11.32 11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendRightDown))
export { Memo as IconArrowBendRightDown }
