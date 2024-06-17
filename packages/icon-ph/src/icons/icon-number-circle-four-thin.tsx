/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleFourThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m36-76a4 4 0 0 1-4 4h-12v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1-3.79-5.26l24-72a4 4 0 1 1 7.58 2.52L101.55 140H140v-28a4 4 0 0 1 8 0v28h12a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleFourThin))
export { Memo as IconNumberCircleFourThin }
