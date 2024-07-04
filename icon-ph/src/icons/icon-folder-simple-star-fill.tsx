/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderSimpleStarFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 208a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h80a8 8 0 0 1 8 8m111.63-48.8a8 8 0 0 0-7-5.56l-29.84-2.31-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5-29.84 2.31a8 8 0 0 0-4.47 14.14l22.51 18.59-6.85 27.71a8 8 0 0 0 11.82 8.81l25.6-15.07 25.61 15.07a8 8 0 0 0 11.82-8.81l-6.85-27.71 22.51-18.59a8 8 0 0 0 2.54-8.58"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderSimpleStarFill))
export { Memo as IconFolderSimpleStarFill }
