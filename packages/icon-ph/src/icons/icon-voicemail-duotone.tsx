/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVoicemailDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M104 128a48 48 0 1 1-48-48 48 48 0 0 1 48 48m96-48a48 48 0 1 0 48 48 48 48 0 0 0-48-48"
          opacity={0.2}
        />
        <Path d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M16 128a40 40 0 1 1 40 40 40 40 0 0 1-40-40m184 40a40 40 0 1 1 40-40 40 40 0 0 1-40 40" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconVoicemailDuotone))
export { Memo as IconVoicemailDuotone }
