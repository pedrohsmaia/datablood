/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWifiSlashThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8M51 37.31a4 4 0 0 0-6 5.38l19.72 21.65a167.64 167.64 0 0 0-43.26 25.75 4 4 0 1 0 5.08 6.19 159.4 159.4 0 0 1 43.93-25.62l29.64 32.61a120.12 120.12 0 0 0-46.6 22.64 4 4 0 0 0 5 6.27 112 112 0 0 1 47.85-22.07L142 149.37a72.6 72.6 0 0 0-14-1.37 71.49 71.49 0 0 0-42.36 13.77A4 4 0 0 0 88 169a4.07 4.07 0 0 0 2.36-.76 64 64 0 0 1 62.11-7.38L205 218.69a4 4 0 1 0 5.92-5.38Zm183.54 52.78A168.33 168.33 0 0 0 128 52a171.08 171.08 0 0 0-21.5 1.36 4 4 0 0 0 1 7.94A162.68 162.68 0 0 1 128 60a160.22 160.22 0 0 1 101.46 36.28 4 4 0 0 0 5.08-6.19m-37 42.09a4 4 0 1 0 5-6.27 120.17 120.17 0 0 0-50.06-23.42 4 4 0 1 0-1.62 7.83 112.18 112.18 0 0 1 46.66 21.86Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWifiSlashThin))
export { Memo as IconWifiSlashThin }
