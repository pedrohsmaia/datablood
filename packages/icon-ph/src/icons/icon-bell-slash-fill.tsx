/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBellSlashFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M53.94 34.62A8 8 0 1 0 42.1 45.38L58.84 63.8A79.49 79.49 0 0 0 48 104c0 35.34-8.27 62.38-13.82 71.94A16 16 0 0 0 48 200h40.82a40 40 0 0 0 78.39 0h15.45l19.44 21.38a8 8 0 1 0 11.84-10.76ZM128 216a24 24 0 0 1-22.63-16h45.25A24 24 0 0 1 128 216m87.29-37.41a8 8 0 0 1-10.14-1.41L86.58 46.74a8 8 0 0 1 2-12.34A80 80 0 0 1 208 104c0 35.35 8 58.59 10.51 64.88a8 8 0 0 1-3.2 9.71Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBellSlashFill))
export { Memo as IconBellSlashFill }
