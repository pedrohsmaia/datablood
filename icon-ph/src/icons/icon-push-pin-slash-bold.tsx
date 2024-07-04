/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPushPinSlashBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M56.88 31.93a12 12 0 1 0-17.76 16.14L60 71a76 76 0 0 0-24.54 13.51 20 20 0 0 0-1.6 29.73l45.46 45.47-39.8 39.8a12 12 0 0 0 17 17l39.8-39.81 45.47 45.46A20 20 0 0 0 155.9 228c.47 0 .94 0 1.41-.05a20 20 0 0 0 14.56-7.95 97.47 97.47 0 0 0 9.54-15.46l17.72 19.49a12 12 0 1 0 17.76-16.14Zm98.49 169.88L54.08 100.52C62 95 70.31 92.12 78.91 91.83l84.51 93a62 62 0 0 1-8.05 16.98m82.78-95-39 39.11a12 12 0 1 1-17-16.95l36.19-36.3-55-55-32.75 32.83a12 12 0 0 1-17-16.94l35.57-35.69a20 20 0 0 1 28.3 0l60.69 60.68a20 20 0 0 1 0 28.28Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPushPinSlashBold))
export { Memo as IconPushPinSlashBold }
