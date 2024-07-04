/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArchiveBoxFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m223.16 68.42-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.08 8.08 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.08 8.08 0 0 0-.84-3.58m-57.5 89.24-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32M52.94 64l8-16h134.12l8 16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArchiveBoxFill))
export { Memo as IconArchiveBoxFill }
