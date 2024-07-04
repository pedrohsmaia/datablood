/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSelectionPlusFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 72a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H72v24a8 8 0 0 1-16 0Zm56 112H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h40a8 8 0 0 1 0 16m16-120a8 8 0 0 1 8-8h32a16 16 0 0 1 16 16v40a8 8 0 0 1-16 0V72h-32a8 8 0 0 1-8-8m72 120h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSelectionPlusFill))
export { Memo as IconSelectionPlusFill }
