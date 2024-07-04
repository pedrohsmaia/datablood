/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPencilCircleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204.37 51.6A108.08 108.08 0 1 0 236 128a108.09 108.09 0 0 0-31.63-76.4M92 200a12 12 0 1 1 24 0v11.11a83.78 83.78 0 0 1-24-7.22Zm48 0a12 12 0 1 1 24 0v3.89a83.78 83.78 0 0 1-24 7.22Zm-33.86-52h43.72l7.57 16.42a35.95 35.95 0 0 0-29.43 8.8 35.95 35.95 0 0 0-29.43-8.79Zm11.08-24L128 100.62 138.78 124ZM188 186.79V176a12.15 12.15 0 0 0-1.1-5l-48-104a12 12 0 0 0-21.8 0l-48 104a12.15 12.15 0 0 0-1.1 5v10.77a84 84 0 1 1 120 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPencilCircleBold))
export { Memo as IconPencilCircleBold }
