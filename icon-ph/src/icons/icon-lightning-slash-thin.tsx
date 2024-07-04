/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLightningSlashThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M51 37.31a4 4 0 0 0-6 5.38L86.77 88.6l-41.69 44.67a4 4 0 0 0 1.52 6.47l60.81 22.81-15.33 76.67a4 4 0 0 0 6.84 3.51l64.83-69.46L205 218.69a4 4 0 1 0 5.92-5.38ZM102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36l37.17-39.82 66.18 72.79Zm8.71-158.9a4 4 0 0 1-.2-5.65l45.89-49.16a4 4 0 0 1 6.84 3.51l-15.33 76.65 60.81 22.8a4 4 0 0 1 2.49 2.84 4 4 0 0 1-1 3.64l-22.3 23.89a4 4 0 0 1-5.85-5.45L201 121.64l-58.4-21.9a4 4 0 0 1-2.52-4.52L153.32 29 117 67.89a4 4 0 0 1-5.61.19Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLightningSlashThin))
export { Memo as IconLightningSlashThin }
