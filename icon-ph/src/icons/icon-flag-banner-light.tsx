/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlagBannerLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M229.07 52.8A6 6 0 0 0 224 50H32a6 6 0 0 0-4 10.42l43.56 39.93-43.97 47.58A6 6 0 0 0 32 158h136.78l-30.2 63.42a6 6 0 0 0 10.84 5.16l80-168a6 6 0 0 0-.35-5.78M174.5 146H45.7l38.71-41.93a6 6 0 0 0-.36-8.49L47.43 62H214.5Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlagBannerLight))
export { Memo as IconFlagBannerLight }
