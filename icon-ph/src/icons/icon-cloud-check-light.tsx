/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudCheckLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100 50.67 50.67 0 0 1 5.91.35A85.61 85.61 0 0 0 74 128a6 6 0 0 0 12 0 74 74 0 1 1 74 74m36.24-94.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L144 151.51l43.76-43.75a6 6 0 0 1 8.48 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudCheckLight))
export { Memo as IconCloudCheckLight }
