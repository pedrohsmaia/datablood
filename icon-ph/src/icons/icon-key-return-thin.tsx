/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyReturnThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180 104v32a4 4 0 0 1-4 4H89.66l17.17 17.17a4 4 0 0 1-5.66 5.66l-24-24a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 5.66L89.66 132H172v-28a4 4 0 0 1 8 0m48-48v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyReturnThin))
export { Memo as IconKeyReturnThin }
