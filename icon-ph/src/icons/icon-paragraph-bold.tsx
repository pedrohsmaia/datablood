/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconParagraphBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H96a68 68 0 0 0 0 136h36v36a12 12 0 0 0 24 0V60h16v148a12 12 0 0 0 24 0V60h12a12 12 0 0 0 0-24m-76 112H96a44 44 0 0 1 0-88h36Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconParagraphBold))
export { Memo as IconParagraphBold }
