/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCreditCardLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M32 62h192a2 2 0 0 1 2 2v26H30V64a2 2 0 0 1 2-2m192 132H32a2 2 0 0 1-2-2v-90h196v90a2 2 0 0 1-2 2m-18-26a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-64 0a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCreditCardLight))
export { Memo as IconCreditCardLight }
