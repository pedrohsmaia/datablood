/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlagBanner = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230.76 51.73A8 8 0 0 0 224 48H32a8 8 0 0 0-5.41 13.9l42.09 38.57-42.56 46.1A8 8 0 0 0 32 160h133.62l-28.84 60.56a8 8 0 1 0 14.44 6.88l80-168a8 8 0 0 0-.46-7.71M173.23 144h-123l35.61-38.57a8 8 0 0 0-.47-11.33L52.57 64h158.76Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlagBanner))
export { Memo as IconFlagBanner }
