/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRowsLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 138H48a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14m2 54a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-40a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-142H48a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 54a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRowsLight))
export { Memo as IconRowsLight }
