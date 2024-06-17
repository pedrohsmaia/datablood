/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGearFineFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 120h-8.34a95.07 95.07 0 0 0-8.82-32.9l7.23-4.17a8 8 0 0 0-8-13.86l-7.25 4.19a97 97 0 0 0-24.08-24.08l4.19-7.25a8 8 0 0 0-13.86-8l-4.17 7.23a95.07 95.07 0 0 0-32.9-8.82V24a8 8 0 0 0-16 0v8.34a95.07 95.07 0 0 0-32.9 8.82l-4.17-7.23a8 8 0 0 0-13.86 8l4.19 7.25a97 97 0 0 0-24.08 24.08l-7.25-4.19a8 8 0 0 0-8 13.86l7.23 4.17a95.07 95.07 0 0 0-8.82 32.9H24a8 8 0 0 0 0 16h8.34a95.07 95.07 0 0 0 8.82 32.9l-7.23 4.17a8 8 0 0 0 4 14.93 7.92 7.92 0 0 0 4-1.07l7.25-4.19a97 97 0 0 0 24.08 24.08l-4.19 7.25a8 8 0 0 0 13.86 8l4.17-7.23a95.07 95.07 0 0 0 32.9 8.82V232a8 8 0 0 0 16 0v-8.34a95.07 95.07 0 0 0 32.9-8.82l4.17 7.23a8 8 0 0 0 13.86-8l-4.19-7.25a97 97 0 0 0 24.08-24.08l7.25 4.19A8 8 0 0 0 225 184a8 8 0 0 0-2.92-10.93l-7.23-4.17a95.07 95.07 0 0 0 8.82-32.9H232a8 8 0 0 0 0-16m-160 8a55.91 55.91 0 0 1 21.38-44l25.38 44-25.38 44A55.91 55.91 0 0 1 72 128m56 56a55.67 55.67 0 0 1-20.78-4l25.4-44h50.8A56.09 56.09 0 0 1 128 184m4.62-64-25.4-44a56 56 0 0 1 76.2 44Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGearFineFill))
export { Memo as IconGearFineFill }
