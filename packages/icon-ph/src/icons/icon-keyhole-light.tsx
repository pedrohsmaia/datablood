/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyholeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m38-106a38 38 0 1 0-63.93 27.78L90.71 168.3A10 10 0 0 0 100 182h56a10 10 0 0 0 9.29-13.7l-11.36-28.52A38.14 38.14 0 0 0 166 112m-22.78 21.08a6 6 0 0 0-2.06 7.08L153.05 170H103l11.89-29.84a6 6 0 0 0-2.06-7.08 26 26 0 1 1 30.44 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyholeLight))
export { Memo as IconKeyholeLight }
