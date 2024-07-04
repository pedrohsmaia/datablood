/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHSixLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 146a34.5 34.5 0 0 0-5.6.47l18.75-31.39a6 6 0 0 0-10.3-6.16l-32.25 54-.22.41A34 34 0 1 0 212 146m0 56a22 22 0 1 1 22-22 22 22 0 0 1-22 22M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHSixLight))
export { Memo as IconTextHSixLight }
