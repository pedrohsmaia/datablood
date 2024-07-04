/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRulerFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M235.32 96 96 235.31a16 16 0 0 1-22.63 0l-52.69-52.68a16 16 0 0 1 0-22.63l29.17-29.17a4 4 0 0 1 5.66 0l34.83 34.83a8 8 0 0 0 11.71-.43 8.18 8.18 0 0 0-.6-11.09l-34.63-34.63a4 4 0 0 1 0-5.65l15-15a4 4 0 0 1 5.66 0l34.83 34.83a8 8 0 0 0 11.71-.43 8.18 8.18 0 0 0-.6-11.09L98.83 87.51a4 4 0 0 1 0-5.65l15-15a4 4 0 0 1 5.65 0l34.83 34.83a8 8 0 0 0 11.72-.43 8.18 8.18 0 0 0-.61-11.09l-34.59-34.66a4 4 0 0 1 0-5.65L160 20.69a16 16 0 0 1 22.63 0l52.69 52.68a16 16 0 0 1 0 22.63"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRulerFill))
export { Memo as IconRulerFill }
