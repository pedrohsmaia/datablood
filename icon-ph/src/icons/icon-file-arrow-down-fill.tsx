/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileArrowDownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-56 83.32-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 11.32M152 88V44l44 44Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileArrowDownFill))
export { Memo as IconFileArrowDownFill }
