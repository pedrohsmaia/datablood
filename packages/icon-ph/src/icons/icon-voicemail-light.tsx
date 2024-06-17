/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVoicemailLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 74a54 54 0 0 0-33.89 96H89.89A54 54 0 1 0 56 182h144a54 54 0 0 0 0-108M14 128a42 42 0 1 1 42 42 42 42 0 0 1-42-42m186 42a42 42 0 1 1 42-42 42 42 0 0 1-42 42"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVoicemailLight))
export { Memo as IconVoicemailLight }
