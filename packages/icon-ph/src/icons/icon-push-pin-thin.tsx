/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPushPinThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232.49 84.2 171.8 23.51a12 12 0 0 0-17 0L99.45 79.07c-8.08-3-32.79-9.45-59 11.67a12 12 0 0 0-1 17.84l51.13 51.13-45.41 45.46a4 4 0 0 0 5.66 5.66l45.46-45.47 51.12 51.12a12 12 0 0 0 8.49 3.52h.85a12 12 0 0 0 8.73-4.74c19.83-26.36 16.51-47.18 11.71-58.57l55.3-55.49a12 12 0 0 0 0-17m-5.66 11.31L169.56 153a4 4 0 0 0-.75 4.61c10.43 20.85-1.62 42-9.73 52.83a4 4 0 0 1-6 .4L45.17 102.93a4 4 0 0 1 .33-6c12.94-10.4 25.36-13.19 34.94-13.19a43.9 43.9 0 0 1 18.16 3.64 4 4 0 0 0 4.62-.75l57.27-57.46a4 4 0 0 1 5.66 0l60.68 60.69a4 4 0 0 1 0 5.65"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPushPinThin))
export { Memo as IconPushPinThin }
