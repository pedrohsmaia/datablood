/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVideoCameraSlashLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M250.83 74.71a6 6 0 0 0-6.16.3L206 100.79V72a14 14 0 0 0-14-14h-78.94a6 6 0 0 0 0 12H192a2 2 0 0 1 2 2v87.63a6 6 0 0 0 12 0v-4.42L244.67 181a6 6 0 0 0 9.33-5V80a6 6 0 0 0-3.17-5.29M242 164.79l-36-24v-25.58l36-24ZM52.44 36a6 6 0 0 0-8.88 8l12.69 14H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h151.53l20 22a6 6 0 0 0 8.88-8.08ZM32 186a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h35.16l105.46 116Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVideoCameraSlashLight))
export { Memo as IconVideoCameraSlashLight }
