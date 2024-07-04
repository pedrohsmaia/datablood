/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVoicemailFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M56 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40m144 0a40 40 0 1 1 40-40 40 40 0 0 1-40 40m24-40a24 24 0 1 1-24-24 24 24 0 0 1 24 24m-144 0a24 24 0 1 1-24-24 24 24 0 0 1 24 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVoicemailFill))
export { Memo as IconVoicemailFill }
