/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsDownUpBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M120.49 167.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L68 179V48a12 12 0 0 1 24 0v131l11.51-11.52a12 12 0 0 1 16.98.03m96-96-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L164 77v131a12 12 0 0 0 24 0V77l11.51 11.52a12 12 0 0 0 17-17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsDownUpBold))
export { Memo as IconArrowsDownUpBold }
