/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExportFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 96h-16V43.31L93.66 69.66a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0l40 40a8 8 0 0 1-11.32 11.32L136 43.31Zm64 0h-64v40a8 8 0 0 1-16 0V96H56a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconExportFill))
export { Memo as IconExportFill }
