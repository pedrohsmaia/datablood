/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChecksFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 160a8 8 0 0 1-5.66-2.34l-24-24a8 8 0 0 1 11.32-11.32L80 140.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56A8 8 0 0 1 80 160m133.66-58.34-56 56a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L152 140.69l50.34-50.35a8 8 0 0 1 11.32 11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChecksFill))
export { Memo as IconChecksFill }
