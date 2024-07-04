/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStepsLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M246 56a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6H78v42a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h50v-42a6 6 0 0 1 6-6h50v-42a6 6 0 0 1 6-6h50V56a6 6 0 0 1 6-6h56a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStepsLight))
export { Memo as IconStepsLight }
