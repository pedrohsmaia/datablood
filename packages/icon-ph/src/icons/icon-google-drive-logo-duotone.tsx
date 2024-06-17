/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGoogleDriveLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M24 160h64l-32.88 54.8a7.91 7.91 0 0 1-2.74-2.8l-27.33-47.85A8 8 0 0 1 24 160m144 0 32.88 54.8a7.91 7.91 0 0 0 2.74-2.83l27.32-47.82A8 8 0 0 0 232 160ZM100.43 40a8.06 8.06 0 0 0-3.84 1L128 93.33 159.41 41a8.07 8.07 0 0 0-3.85-1Z"
          opacity={0.2}
        />
        <Path d="M237.6 151.78 169.13 39.52A15.91 15.91 0 0 0 155.56 32h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 151.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 224h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 152h-46.48l-35.19-58.67 22.75-37.92Zm-116.87 0L128 108.88 153.87 152Zm61.34 16 24 40H68.53l24-40ZM128 77.78 110.12 48l35.78-.05ZM95.91 55.41l22.76 37.92L83.47 152H37ZM36.54 168h37.33l-19.15 31.92Zm164.74 31.93L182.12 168h37.41Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGoogleDriveLogoDuotone))
export { Memo as IconGoogleDriveLogoDuotone }
