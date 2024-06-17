/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHFourThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M252 176a4 4 0 0 1-4 4h-12v28a4 4 0 0 1-8 0v-28h-44a4 4 0 0 1-3.79-5.26l24-72a4 4 0 1 1 7.58 2.52L189.55 172H228v-28a4 4 0 0 1 8 0v28h12a4 4 0 0 1 4 4M144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHFourThin))
export { Memo as IconTextHFourThin }
