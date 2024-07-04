/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendLeftUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M206 224a6 6 0 0 1-6 6A102.12 102.12 0 0 1 98 128V46.49L60.24 84.24a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L110 46.49V128a90.1 90.1 0 0 0 90 90 6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendLeftUpLight))
export { Memo as IconArrowBendLeftUpLight }
