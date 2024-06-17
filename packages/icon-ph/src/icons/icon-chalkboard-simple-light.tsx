/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChalkboardSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M26 168V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v112a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v112a6 6 0 0 1-12 0m220 32a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h98v-26a6 6 0 0 1 6-6h64a6 6 0 0 1 6 6v26h50a6 6 0 0 1 6 6m-120-6h52v-20h-52Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChalkboardSimpleLight))
export { Memo as IconChalkboardSimpleLight }
