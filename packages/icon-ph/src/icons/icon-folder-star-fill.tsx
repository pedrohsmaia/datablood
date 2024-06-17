/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderStarFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m237.09 167.78-22.51 18.59 6.85 27.71a8 8 0 0 1-11.82 8.81L184 207.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31 11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5 29.84 2.31a8 8 0 0 1 4.47 14.14M128.56 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69L131.31 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88H40v112h80.56a8 8 0 0 1 8 8M40 72h68.69l-16-16H40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderStarFill))
export { Memo as IconFolderStarFill }
