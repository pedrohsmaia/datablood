/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleNineLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M145 78.55A34 34 0 1 0 127.94 142a33.56 33.56 0 0 0 5.67-.49l-18.76 31.42a6 6 0 0 0 10.3 6.16l32.3-54.09A34 34 0 0 0 145 78.55m2.06 40.45A22 22 0 1 1 139 89a22 22 0 0 1 8.05 30ZM128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleNineLight))
export { Memo as IconNumberCircleNineLight }
